import React, { useState } from 'react';


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
    }

    const getAnswers = () => {
        onNextQuestionClick(value, false);
        (answer1 === 3 && answer2 === 1 && answer3 === 2) &&
            onNextQuestionClick(value, true);
        setAnswer1(null);
        setAnswer2(null);
        setAnswer3(null);
    }



    return (
        <div className='d-flex answer-section flex-column align-items-center'>
            <div className={answerTypeClass}>

                {/* ///////////////answerType === "select" */}
                {questions[currentQuestion].answerType === "select" &&
                    questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <div className="p-2 d-flex flex-column align-items-center" key={index}>
                            <span className="mb-1 bold" >{answerOption.answerText}</span>
                            <input
                                type="checkbox"
                                checked={checked && index === id ? true : false}
                                onChange={() => onCheckboxClick(answerOption.isCorrect, index)}
                            ></input>
                        </div>
                    ))
                }

                {/* ///////////////answerType === "input" */}
                {questions[currentQuestion].answerType === "input" &&
                    <div className="form-outline mb-4 shadow">
                        <input type="text"
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="Ваша відповідь"
                            className="textInput form-control" />
                    </div>
                }

                {/* ///////////////answerType === "multiSelect" */}
                {questions[currentQuestion].answerType === "multiSelect" &&
                    <div className="bold ml-3 mr-1 d-flex justify-content-around">
                        <span>A</span>
                        <span>Б</span>
                        <span>В</span>
                        <span>Г</span>
                        <span>Д</span>
                    </div>
                }
                {questions[currentQuestion].answerType === "multiSelect" &&
                    questions[currentQuestion].answerOptions.map(function (elem, index) {
                        return (
                            <div key={index} className="d-flex align-items-center ">
                                {index === 0 && <span className="bold">1</span>}
                                {index === 1 && <span className="bold">2</span>}
                                {index === 2 && <span className="bold">3</span>}
                                <div className="m-1">{elem.map(function (num, index) {
                                    return (
                                        <input
                                            key={index}
                                            className="my-1 mx-2"
                                            checked={itemsArr.includes(num.id)}
                                            type="checkbox"
                                            onChange={() => addItems(num.id)}
                                        ></input>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })
                }

                {/* ///////////////answerType === "doubleSelect" */}
                {questions[currentQuestion].answerType === "doubleSelect" &&
                    questions[currentQuestion].answerOptions.map((num, index) => (
                        <div className="p-2 d-flex flex-column align-items-center" key={index}>
                            <span className="mb-1 bold" >{num.answerText}</span>
                            <input
                                type="checkbox"
                                checked={itemsArr.includes(num.id)}
                                onChange={() => addItems(num.id)}
                            ></input>
                        </div>
                    ))
                }

                {/* ///////////////answerType === "numbersInput" */}
                {questions[currentQuestion].answerType === "numbersInput" &&
                    questions[currentQuestion].answerOptions.map((num, index) => (
                        <div className="p-2 d-flex  align-items-center" key={index}>
                            <span className="mb-1 bold mr-2" >{num.answerText}</span>
                            <select
                                key={num.id}
                                onChange={(event) => getNumbers(event, num.id)}
                                className="numbersInput form-control form-control shadow"
                            >
                                <option>{""}</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    ))
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