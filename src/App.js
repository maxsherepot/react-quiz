import React, { useState } from 'react';
import red from "./images/red.png"

export default function App() {
	const questions = [
		{
			questionText: 'A =',
			answerOptions: [
				{ url:"", answerText: 'A', isCorrect: true },
				{ answerText: 'Б', isCorrect: false },
				{ answerText: 'В', isCorrect: false },
				{ answerText: 'Г', isCorrect: false },
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
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Б', isCorrect: false },
				{ answerText: 'В', isCorrect: false },
				{ answerText: 'Г', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {

		// Відмічання правильних відповідей
		if (isCorrect) {
			setScore(score + 1);
		}

		// Перехід на наступне питання
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			// Показ рахунку вкінці квізу
			setShowScore(true);
		}
	};

	return (
		<div className='container'>
			<div className='app p-1 d-flex align-items-center justify-content-center flex-column border border-secondary rounded bg-light'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
				) : (
						<>
							<div className='question-count mb-4 d-flex align-self-start'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>

							<div className='question-section m-3'>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
								<img src={red}></img>
							</div>


							<div className='answer-section d-flex'>
								{questions[currentQuestion].answerOptions.map((answerOption, index) => (

									<div className="p-3 d-flex flex-column align-items-center" key={index}>
										<span className="" >{answerOption.answerText}</span>
										<input
											className=""
											type="checkbox"
											checked={false}
											onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}></input>
									</div>

								))}
							</div>

						</>
					)}
			</div>
		</div>
	);
}
