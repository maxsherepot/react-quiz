import React, { useState } from 'react';
// import red from "../images/red.png";
// import А from "../images/A.png";
// import Б from "../images/Б.jpg";
// import В from "../images/В.png";
// import Г from "../images/Г.png";
import ScoreWindow from './ScoreWindow';
import ProgressBar from './ProgressBar';
import QuestionSection from './QuestionSection';
import AnswerSection from './AnswerSection';
import questionsJSON from "../json/json.js";


export default function App() {
	const questions = [
		{
			questionText: 'А= ',
			// questionImage: [
			// 	А,
			// 	Б,
			// 	В,
			// ],
			answerOptions: [
				{ answerText: 'A', isCorrect: true },
				{ answerText: 'Б', isCorrect: false },
				{ answerText: 'В', isCorrect: false },
				{ answerText: 'Г', isCorrect: false },
				{ answerText: '122', isCorrect: false },
			],
		},
		{
			questionText: 'Б =',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Б', isCorrect: true },
				{ answerText: 'В', isCorrect: false },
				{ answerText: 'Г', isCorrect: false },
			],
		},
		{
			questionText: 'В =',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Б', isCorrect: false },
				{ answerText: 'В', isCorrect: true },
				{ answerText: 'Г', isCorrect: false },
			],
		},
		{
			questionText: 'Г =',
			answerOptions: [
				{ answerText: 'В', isCorrect: false },
				{ answerText: 'Г', isCorrect: true },
			],
		},
	];

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

	const handleAnswerOptionClick = () => {
		// Відмічання правильних відповідей
		{ isCorrect && setScore(score + 1) };
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

	console.log(questionsJSON);

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
								setChecked={setChecked}
								checked={checked}
								id={id} />}
						</>
					)}
			</div>
		</div>
	);
};
