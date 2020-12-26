import React from 'react';


const InputAnswer = ({setValue}) => {

    return (
        <div className="form-outline mb-4 shadow">
            <input type="text"
                onChange={(event) => setValue(event.target.value)}
                placeholder="Ваша відповідь"
                className="textInput form-control" />
        </div>
    )
};


export default InputAnswer;