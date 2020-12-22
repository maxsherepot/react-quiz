import React from 'react';


const RegistrationForm = ({ setRegistrationForm }) => {

    return (
        <div>
            <form className="text-center " action="#!">
                <div className="online-test bold text-center">Oнлайн тест з математики</div>
                <div className="question-count mb-4">Введіть ваші дані щоб пройти тест</div>

                <input
                    required
                    type="text"
                    className="textInput form-control mb-3 shadow"
                    placeholder="Ваше ім'я"></input>

                <input
                    required
                    type="password"
                    className="textInput form-control mb-3 shadow"
                    placeholder="Прізвище"></input>

                <button
                    type="submit"
                    onClick={() => setRegistrationForm(false)}
                    className="btn btn-md btn-primary rounded"
                >Почати</button>
            </form>
        </div>
    );
};


export default RegistrationForm;