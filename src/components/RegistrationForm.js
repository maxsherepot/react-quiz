import React, { useState } from 'react';


const RegistrationForm = ({ setRegistrationForm }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");


    const onGetName = (event) => {
        setName(event.target.value);
    };

    const onGetLastName = (event) => {
        setLastName(event.target.value);
    };

    const postUserData = () => {
        localStorage.setItem("first_name", name);
        localStorage.setItem("last_name", lastName);
        setRegistrationForm(false);
    };


    return (
        <div>
            <form className="text-center">
                <div className="online-test bold text-center">Oнлайн тест з математики</div>
                <div className="question-count mb-4">Введіть ваші дані щоб пройти тест</div>

                <input
                    onChange={(event) => onGetName(event)}
                    required
                    type="text"
                    className="textInput form-control mb-3 shadow"
                    placeholder="Iм'я"></input>

                <input
                    onChange={(event) => onGetLastName(event)}
                    required
                    type="text"
                    className="textInput form-control mb-3 shadow"
                    placeholder="Прізвище"></input>

                <button
                    type="submit"
                    onClick={() => postUserData()}
                    className="btn btn-md btn-primary rounded"
                >Почати</button>
            </form>
        </div>
    );
};


export default RegistrationForm;