import React, { useEffect, useState } from 'react';
import { getDataToRating } from "../helpers/ratingData"


const Rating = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async function () {
            const res = await getDataToRating()
            setResults(res)
        })();
    }, []);


    return (
        <div>
            <form className="d-flex flex-column align-items-center" action="#!">
                <div className="online-test bold">Результати онлайн тесту з математики всіх учасників</div>

                <div className="overallRating rounded question-count py-2 px-3 mt-3">
                    <span className="infoIcon">&#9432;</span> Загальний рейтинг: <span className="bold"> 30</span>%
                </div>

                <table className="table my-4">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left bold">Ім'я</th>
                            <th scope="col" className="text-center bold">Прізвище</th>
                            <th scope="col" className="text-right bold">Результат, %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => {
                            return (
                                <tr
                                    key={result.id}>
                                    <td className="text-left text-body">{result.first_name}</td>
                                    <td className="text-center text-body">{result.last_name}</td>
                                    <td className="text-right text-body text-primary">{result.result}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <button
                    className="btn btn-md btn-primary rounded"
                    type="submit">Пройти тест знову</button>
            </form>
        </div>
    );
};


export default Rating;