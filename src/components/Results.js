import React from 'react';


const Results = () => {

    return (
        <div>
            <form className="d-flex flex-column align-items-center" action="#!">
                <div className="online-test bold">Результати онлайн тесту з математики всіх учасників</div>
                <div className="overallRating rounded question-count py-2 px-3 mt-3"
                ><span className="infoIcon">&#9432;</span> Загальний рейтинг: <span className="bold"> 30</span>%</div>

                <table className="table my-4">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left bold">Ім'я</th>
                            <th scope="col" className="text-center bold">Прізвище</th>
                            <th scope="col" className="text-right bold">Результат, %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left text-body">Іван</td>
                            <td className="text-center text-body">Стеценко</td>
                            <td className="text-right text-body text-primary">50</td>
                        </tr>
                        
                    </tbody>
                </table>

                <button
                    className="btn btn-md btn-primary rounded"
                    type="submit">Пройти тест знову</button>
            </form>
        </div>
    );
};


export default Results;