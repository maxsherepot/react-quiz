import React from 'react';


const Results = ({ score }) => {
    const percentage = score * 10;
    

    return (
        <div>
            <form className="d-flex flex-column align-items-center" action="#!">
                <div className="online-test bold">Результат онлайн тесту з математики</div>
                <div className="overallRating rounded question-count py-2 px-3 mt-3"
                ><span className="infoIcon">&#9432;</span>Ваш тестовий бал: <span className="bold">{percentage}</span>%</div>



                <button
                    className="btn btn-md btn-primary rounded"
                    type="submit">Пройти тест знову</button>
            </form>
        </div>
    );
};


export default Results;