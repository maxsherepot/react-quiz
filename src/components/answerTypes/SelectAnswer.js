import React from 'react';


const SelectAnswer = (props) => {
    const { questions, currentQuestion, checked, id, onCheckboxClick } = props;

    return (
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
    );
};


export default SelectAnswer;