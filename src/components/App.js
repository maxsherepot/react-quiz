import React, { useState } from 'react';
import ScoreWindow from './ScoreWindow';
import ProgressBar from './ProgressBar';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import questionsJSON from "../json/json.js";


const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [progress, setProgress] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [checked, setChecked] = useState(false);
	const [id, setId] = useState(null);


	const onCheckboxClick = (answerOption, index) => {
		setIsCorrect(answerOption);
		setId(index);
		setChecked(checked => !checked);
	};

	const handleAnswerOptionClick = (value) => {
		// Відмічання правильних відповідей для input'а
		const inputNumber = parseFloat(value.replace(/,/, "."));
		{ inputNumber === questionsJSON[currentQuestion].correctAnswer && setScore(score + 1) }

		// Перехід на наступне питання
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionsJSON.length) {
			setCurrentQuestion(nextQuestion);
			setIsCorrect(false);
			setChecked(false);
			setProgress((progress) => { return progress + 10 })
		} else {
			// Показ рахунку вкінці квізу
			setShowScore(true);
		};
	};


	return (
		<div className='container'>
			<div className='app d-flex align-items-center justify-content-center flex-column'>
				{showScore ?
					<ScoreWindow
						score={score}
						questions={questionsJSON} />
					: (
						<>
							<span className="mb-4 online-test bold">Oнлайн тест з математики</span>
							<ProgressBar
								progress={progress}
								currentQuestion={currentQuestion}
								questions={questionsJSON} />

							<QuestionSection
								questions={questionsJSON}
								currentQuestion={currentQuestion} />

							{<AnswerSection
								questions={questionsJSON}
								currentQuestion={currentQuestion}
								handleAnswerOptionClick={handleAnswerOptionClick}
								onCheckboxClick={onCheckboxClick}
								checked={checked}
								id={id} />}
						</>
					)}
			</div>
		</div>
	);
};


export default App;
