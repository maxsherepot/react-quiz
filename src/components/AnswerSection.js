import React, { useState } from 'react';


const AnswerSection = (props) => {
    const { questions, currentQuestion, onNextQuestionClick, checked, onCheckboxClick, id, addItems,itemsArr } = props;
    const [value, setValue] = useState("");


    let answerTypeClass;
    questions[currentQuestion].answerType === "multiSelect" ?
        answerTypeClass = "d-flex flex-column align-self-start" : answerTypeClass = "d-flex align-self-start";


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
                            className="form-control form-control-sm" />
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
            </div>
            <button
                className="btn btn-md btn-primary rounded mt-3"
                type="submit"
                onClick={() => onNextQuestionClick(value)}
            >Наступне</button>
        </div>
    );
};


export default AnswerSection;