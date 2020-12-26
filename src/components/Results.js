import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import {postDataToRating} from "../helpers/ratingData"

const Results = ({ score }) => {
    const [rating, showRating] = useState(false);
    const percentage = score * 10;


    useEffect(() => {
        postDataToRating(percentage);
    }, []);

    const openRating = () => {
        showRating(true);
    };


    return (
        <>
            {
                rating ?
                    <Rating />
                    :
                    <div>
                        <form className="d-flex flex-column align-items-center">
                            <div className="online-test bold">Результат онлайн тесту з математики</div>
                            <div className="overallRating rounded question-count py-2 px-3 mt-3"
                            ><span className="infoIcon">&#9432;</span> Ваш тестовий бал: <span className="bold">{percentage}</span>%</div>

                            <div className="overallRating rounded question-count py-2 px-3 mt-3 d-flex flex-column">
                                <div> <span className="infoIcon">&#9432;</span>
                                    Загальний рейтинг:
                    <span className="bold">{percentage}</span>%
                    </div>
                                <a href="#" className="detailsText mt-2">Детальніше</a>
                            </div>

                            <button
                                onClick={() => openRating()}
                                className="btn btn-md btn-primary rounded mt-4"
                                type="submit">Показати рейтинг</button>
                        </form>
                    </div>
            }
        </>
    );
};


export default Results;