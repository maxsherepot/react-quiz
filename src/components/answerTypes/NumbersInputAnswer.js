import React from 'react';


const NumbersInputAnswer = (props) => {
    const { questions, getNumbers, currentQuestion } = props;


    return (
        questions[currentQuestion].answerOptions.map((num, index) => (
            <div className="p-2 d-flex  align-items-center" key={index}>
                <span className="mb-1 bold mr-2" >{num.answerText}</span>
                <select
                    key={num.id}
                    onChange={(event) => getNumbers(event, num.id)}
                    className="numbersInput form-control form-control shadow">
                    <option>{""}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        ))
    );
};


export default NumbersInputAnswer;