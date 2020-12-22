import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import questionsJSON from "../json/json.js";
import leftImage from "../images/leftImage.png";
import RegistrationForm from './RegistrationForm';
import Rating from './Rating';
import Results from './Results';


const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, setshowResults] = useState(false);
	const [progress, setProgress] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [checked, setChecked] = useState(false);
	const [id, setId] = useState(null);
	const [itemsArr, setItemsArr] = useState([]);
	const [registrationForm, setRegistrationForm] = useState(true);


	let buttonLabel;
	currentQuestion < 9 ? buttonLabel = "Наступне" : buttonLabel = "Дивитися результат";


	const onCheckboxClick = (answerOption, index) => {
		setIsCorrect(answerOption);
		setId(index);
		setChecked(checked => !checked);
	};

	const addItems = (id) => {
		const clickedCategory = itemsArr.indexOf(id);
		const all = [...itemsArr];
		if (clickedCategory === -1) {
			all.push(id);
		} else {
			all.splice(clickedCategory, 1);
		}
		setItemsArr(all);
	};

	const onNextQuestionClick = (value, correctAnswers) => {
		const sortedItemsArr = itemsArr.sort(function (a, b) { return a - b });

		// Відмічання правильних відповідей для numbersInput'а
		{ correctAnswers && setScore(score + 1) }

		// Відмічання правильних відповідей для select'а
		{ isCorrect && setScore(score + 1) }

		// Відмічання правильних відповідей для multiSelect'а
		{
			questionsJSON[currentQuestion].answerType === "multiSelect" &&
				sortedItemsArr.join() === questionsJSON[currentQuestion].correctArr.join() && setScore(score + 1)
		}

		// Відмічання правильних відповідей для doubleSelect'а
		{
			questionsJSON[currentQuestion].answerType === "doubleSelect" &&
				sortedItemsArr.join() === questionsJSON[currentQuestion].correctArr.join() && setScore(score + 1)
		}

		// Відмічання правильних відповідей для input'а
		const inputNumber = parseFloat(value.replace(/,/, "."));
		{ inputNumber === questionsJSON[currentQuestion].correctAnswer && setScore(score + 1) }

		// Перехід на наступне питання
		setItemsArr([]);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionsJSON.length) {
			setCurrentQuestion(nextQuestion);
			setIsCorrect(false);
			setChecked(false);
			setProgress((progress) => { return progress + 10 })
		} else {
			// Показ рахунку вкінці квізу
			setshowResults(true);
		};
	};


	return (
		<div className="d-flex">
			<img src={leftImage} alt="left" className="imageBlock"></img>
			<div className='container'>
				<div className='app d-flex justify-content-center flex-column '>
					
					{/* */} {registrationForm ?
						<RegistrationForm
							setRegistrationForm={setRegistrationForm} />
						:
						showResults ?
							<Results
								score={score} />
							: (
								<>
									<span className="mb-4 online-test bold text-center">Oнлайн тест з математики</span>
									<ProgressBar
										progress={progress}
										currentQuestion={currentQuestion}
										questions={questionsJSON} />

									<QuestionSection
										questions={questionsJSON}
										currentQuestion={currentQuestion} />

									<AnswerSection
										questions={questionsJSON}
										currentQuestion={currentQuestion}
										onNextQuestionClick={onNextQuestionClick}
										onCheckboxClick={onCheckboxClick}
										checked={checked}
										id={id}
										itemsArr={itemsArr}
										addItems={addItems}
										buttonLabel={buttonLabel}/>
								</>
							)}
				</div>
			</div>
		</div>
	);
};


export default App;
