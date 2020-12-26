import React from 'react';


const DoubleSelectAnswer = (props) => {
    const { questions, currentQuestion, addItems, itemsArr } = props;

    
    return (
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
    );
};


export default DoubleSelectAnswer;