import React from 'react';


const QuestionSection = (props) => {
    const { questions, currentQuestion } = props;

    return (
        <div className='question-section m-3'>
            <div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>

                {questions[currentQuestion].questionImage && questions[currentQuestion].questionImage.map(image =>
                    <img className="m-3" src={image} alt="question" />
                )}
            </div>
        </div>
    );
};


export default QuestionSection;