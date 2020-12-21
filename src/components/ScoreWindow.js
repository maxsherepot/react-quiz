import React from 'react';


const ScoreWindow = (props) => {
    const { score, questions } = props;

    return (
        <div className='score-section text-center'>
            You scored {score} out of {questions.length}
        </div>
    );
};


export default ScoreWindow;