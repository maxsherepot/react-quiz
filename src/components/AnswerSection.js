import React from 'react';


const AnswerSection = (props) => {
    const { questions, currentQuestion, handleAnswerOptionClick, checked, onCheckboxClick, id } = props;

    return (
        <div className='d-flex answer-section flex-column align-items-center'>
            <div className='d-flex'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <div className="p-3 d-flex flex-column align-items-center" key={index}>
                        <span className="" >{answerOption.answerText}</span>
                        <input
                            type="checkbox"
                            checked={checked && index === id ? true : false}
                            onChange={() => onCheckboxClick(answerOption.isCorrect, index)}
                        ></input>
                    </div>
                ))}
            </div>

            <button
                className="btn btn-md btn-primary"
                type="submit"
                onClick={() => handleAnswerOptionClick()}
            >Наступне</button>
        </div>
    );
};


export default AnswerSection;