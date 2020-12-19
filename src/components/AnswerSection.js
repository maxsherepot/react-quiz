import React, { useState } from 'react';


const AnswerSection = (props) => {
    const { questions, currentQuestion, handleAnswerOptionClick, checked, onCheckboxClick, id } = props;
    const [value, setValue] = useState("");

    
    return (
        <div className='d-flex answer-section flex-column align-items-center'>
            <div className='d-flex'>

                {/* ///////////////answerType === "select" */}
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <div className="p-2 d-flex flex-column align-items-center" key={index}>
                        <span className="mb-1 bold" >{answerOption.answerText}</span>
                        <input
                            type="checkbox"
                            checked={checked && index === id ? true : false}
                            onChange={() => onCheckboxClick(answerOption.isCorrect, index)}
                        ></input>
                    </div>
                ))}

                {/* ///////////////answerType === "input" */}
                {questions[currentQuestion].answerType === "input" &&
                    <div className="form-outline mb-4 shadow">
                        <input type="text"
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="Ваша відповідь"
                            className="form-control form-control-sm" />
                    </div>
                }
            </div>

            <button
                className="btn btn-md btn-primary rounded mt-3"
                type="submit"
                onClick={() => handleAnswerOptionClick(value)}
            >Наступне</button>
        </div>
    );
};


export default AnswerSection;