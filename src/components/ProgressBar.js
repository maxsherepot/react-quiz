import React from 'react';


const ProgressBar = (props) => {
    const { progress, currentQuestion, questions } = props;


    return (
        <div className="mb-2">
            <span className="accomplishedOn d-flex justify-content-center mb-2">Пройдено на {progress}%</span>

            <div className="progress shadow">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: progress + "%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>

            <div className='question-count d-flex justify-content-end align-items-center mt-1'>
                <div className="bold current-question">{currentQuestion + 1}</div>/{questions.length}
            </div>
        </div>
    );
};


export default ProgressBar;