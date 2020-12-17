import React, { useState } from 'react';
import red from "./images/red.png"
import А from "./images/A.png";
import Б from "./images/Б.jpg";
import В from "./images/В.png";
import Г from "./images/Г.png";


export default function App() {
	const questions = [
		{
			questionText: 'A = ',
			// questionImage: [
			// 	А,
			// 	Б,
			// 	В,
			// 	Г,
			// 	red
			// ],
			answerOptions: [
				{ red, answerText: 'A', isCorrect: true },
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

	const handleAnswerOptionClick = (isCorrect) => {
		// Відмічання правильних відповідей
		{ isCorrect && setScore(score + 1) };

		// Перехід на наступне питання
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setProgress((progress) => {
				return progress + 25
			})
		} else {
			// Показ рахунку вкінці квізу
			setShowScore(true);
		}
	};

	const ScoreWindow = () => {
		return (
			<div className='score-section'>
				You scored {score} out of {questions.length}
			</div>
		)
	};

	const ProgressBar = () => {
		return (
			<div className="mb-4">
				<span className="accomplishedOn d-flex justify-content-center mb-2">Пройдено на {progress}%</span>

				<div className="progress">
					<div
						className="progress-bar"
						role="progressbar"
						style={{ width: progress + "%" }}
						aria-valuenow="70"
						aria-valuemin="0"
						aria-valuemax="100"></div>
				</div>

				<div className='question-count d-flex justify-content-end mt-1'>
					<span>Питання {currentQuestion + 1}</span>/{questions.length}
				</div>
			</div>
		)
	};


	return (
		<div className='container'>
			<div className='app d-flex align-items-center justify-content-center flex-column border border-secondary rounded'>
				{showScore ?
					<ScoreWindow />
					: (
						<>
							<ProgressBar />

							<div className='question-section m-3'>
								<div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
									{questions[currentQuestion].questionImage && questions[currentQuestion].questionImage.map(image =>
										<img className="m-3" src={image} />
									)}

									{/* {questions[currentQuestion].questionImage.map(image =>
										<img className="m-3" src={image} />
									)} */}
								</div>
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
