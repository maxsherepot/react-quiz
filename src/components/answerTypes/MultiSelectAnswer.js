import React from 'react';


const MultiSelectAnswer = (props) => {
    const { questions, addItems, currentQuestion, itemsArr } = props;

    
    return (
        <>
            <div className="bold ml-3 mr-1 d-flex justify-content-around">
                <span>A</span>
                <span>Б</span>
                <span>В</span>
                <span>Г</span>
                <span>Д</span>
            </div>

            {questions[currentQuestion].answerOptions.map(function (elem, index) {
                return (
                    <div key={index} className="d-flex align-items-center ">
                        {index === 0 && <span className="bold">1</span>}
                        {index === 1 && <span className="bold">2</span>}
                        {index === 2 && <span className="bold">3</span>}
                        <div className="m-1">{elem.map(function (num, index) {
                            return (
                                <input
                                    key={index}
                                    className="my-1 mx-2"
                                    checked={itemsArr.includes(num.id)}
                                    type="checkbox"
                                    onChange={() => addItems(num.id)}
                                ></input>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </>
    );
};


export default MultiSelectAnswer;