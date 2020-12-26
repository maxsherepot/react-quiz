import React, { useState } from 'react';
import SelectAnswer from './answerTypes/SelectAnswer';
import InputAnswer from './answerTypes/InputAnswer';
import DoubleSelectAnswer from './answerTypes/DoubleSelectAnswer';
import NumbersInputAnswer from './answerTypes/NumbersInputAnswer';
import MultiSelectAnswer from './answerTypes/MultiSelectAnswer';



const AnswerSection = (props) => {
    const { questions, currentQuestion, onNextQuestionClick, checked, onCheckboxClick, id, addItems, itemsArr, buttonLabel } = props;
    const [value, setValue] = useState("");
    const [answer1, setAnswer1] = useState(null);
    const [answer2, setAnswer2] = useState(null);
    const [answer3, setAnswer3] = useState(null);

    let answerTypeClass;
    if (questions[currentQuestion].answerType === "numbersInput")
        answerTypeClass = "d-flex align-self-start flex-column"
    else if (questions[currentQuestion].answerType === "multiSelect")
        answerTypeClass = "d-flex align-self-start flex-column"
    else
        answerTypeClass = "d-flex align-self-start"


    const getNumbers = (event, id) => {
        const answer = parseFloat(event.target.value);
        id === 1 && setAnswer1(answer);
        id === 2 && setAnswer2(answer);
        id === 3 && setAnswer3(answer);
    };

    const getAnswers = () => {
        onNextQuestionClick(value, false);
        (answer1 === 3 && answer2 === 1 && answer3 === 2) &&
            onNextQuestionClick(value, true);
        setAnswer1(null);
        setAnswer2(null);
        setAnswer3(null);
    };


    return (
        <div className='d-flex answer-section flex-column align-items-center'>
            <div className={answerTypeClass}>
                {questions[currentQuestion].answerType === "select" &&
                    <SelectAnswer
                        questions={questions}
                        currentQuestion={currentQuestion}
                        checked={checked}
                        id={id}
                        onCheckboxClick={onCheckboxClick} />
                }

                {questions[currentQuestion].answerType === "input" &&
                    <InputAnswer
                        setValue={setValue} />
                }

                {questions[currentQuestion].answerType === "multiSelect" &&
                    <MultiSelectAnswer
                        questions={questions}
                        currentQuestion={currentQuestion}
                        itemsArr={itemsArr}
                        addItems={addItems} />
                }

                {questions[currentQuestion].answerType === "doubleSelect" &&
                    <DoubleSelectAnswer
                        itemsArr={itemsArr}
                        addItems={addItems}
                        questions={questions}
                        currentQuestion={currentQuestion} />
                }

                {questions[currentQuestion].answerType === "numbersInput" &&
                    <NumbersInputAnswer
                        questions={questions}
                        currentQuestion={currentQuestion}
                        getNumbers={getNumbers} />
                }
            </div>

            <button
                className="btn btn-md btn-primary rounded mt-3"
                type="submit"
                onClick={() => getAnswers()}
            >{buttonLabel}</button>
        </div>
    );
};


export default AnswerSection;