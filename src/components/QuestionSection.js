import React from 'react';


const QuestionSection = (props) => {
    const { questions, currentQuestion } = props;

    return (
        <div className='question-section d-flex flex-column mt-3'>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>

            {questions[currentQuestion].questionImage && questions[currentQuestion].questionImage.map((image, index) =>
                <img key={index} className="mt-3" src={image} alt="question" />
            )}

        </div>
    );
};


export default QuestionSection;