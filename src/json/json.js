import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";


const questionsJSON = [
    {
        questionImage: [image1],
        answerType: 'select',
        questionText: "Позначте відповіді:",
        answerOptions: [
            { answerText: 'A', isCorrect: true },
            { answerText: 'Б', isCorrect: false },
            { answerText: 'В', isCorrect: false },
            { answerText: 'Г', isCorrect: false },
            { answerText: 'Д', isCorrect: false },
        ],
    },

    {
        questionImage: [image2],
        answerType: 'numbersInput',
        questionText: "Позначте відповіді:",
        answerOptions: [
            { answerText: '1', id: 1 },
            { answerText: '2', id: 2 },
            { answerText: '3', id: 3 }
        ],
    },

    {
        questionImage: [image3],
        answerType: 'doubleSelect',
        questionText: "Позначте відповіді:",
        correctArr: [1, 4],
        answerOptions: [
            { answerText: '1', id: 1 },
            { answerText: '2', id: 2 },
            { answerText: '3', id: 3 },
            { answerText: '4', id: 4 },
        ],
    },

    {
        questionImage: [image4],
        answerType: 'select',
        questionText: "Позначте відповіді:",
        answerOptions: [
            { answerText: 'A', isCorrect: true },
            { answerText: 'Б', isCorrect: false },
            { answerText: 'В', isCorrect: false },
            { answerText: 'Г', isCorrect: false },
            { answerText: 'Д', isCorrect: false },
        ],
    },

    {
        questionImage: [image5],
        answerType: 'input',
        questionText: "Впишіть відповідь:",
        correctAnswer: 17.5,
    },

    {
        questionImage: [image6],
        answerType: 'select',
        questionText: "Позначте відповіді:",
        answerOptions: [
            { answerText: 'A', isCorrect: true },
            { answerText: 'Б', isCorrect: false },
            { answerText: 'В', isCorrect: false },
            { answerText: 'Г', isCorrect: false },
            { answerText: 'Д', isCorrect: false },
        ],
    },

    {
        questionImage: [image7],
        answerType: 'select',
        questionText: "Позначте відповіді:",
        answerOptions: [
            { answerText: 'A', isCorrect: true },
            { answerText: 'Б', isCorrect: false },
            { answerText: 'В', isCorrect: false },
            { answerText: 'Г', isCorrect: false },
            { answerText: 'Д', isCorrect: false },
        ],
    },

    {
        questionImage: [image8],
        answerType: 'multiSelect',
        questionText: "Впишіть відповіді:",
        correctArr: [1, 7, 13],
        answerOptions: [
            [
                { answerText: 'A', id: 1 },
                { answerText: 'Б', id: 2 },
                { answerText: 'В', id: 3 },
                { answerText: 'Г', id: 4 },
                { answerText: 'Д', id: 5 }
            ],
            [
                { answerText: 'A', id: 6 },
                { answerText: 'Б', id: 7 },
                { answerText: 'В', id: 8 },
                { answerText: 'Г', id: 9 },
                { answerText: 'Д', id: 10 }
            ],
            [
                { answerText: 'A', id: 11 },
                { answerText: 'Б', id: 12 },
                { answerText: 'В', id: 13 },
                { answerText: 'Г', id: 14 },
                { answerText: 'Д', id: 15 }
            ]
        ],
    },

    {
        questionImage: [image9],
        answerType: 'multiSelect',
        questionText: "Впишіть відповіді:",
        correctArr: [1, 7, 13],
        answerOptions: [
            [
                { answerText: 'A', id: 1 },
                { answerText: 'Б', id: 2 },
                { answerText: 'В', id: 3 },
                { answerText: 'Г', id: 4 },
                { answerText: 'Д', id: 5 }
            ],
            [
                { answerText: 'A', id: 6 },
                { answerText: 'Б', id: 7 },
                { answerText: 'В', id: 8 },
                { answerText: 'Г', id: 9 },
                { answerText: 'Д', id: 10 }
            ],
            [
                { answerText: 'A', id: 11 },
                { answerText: 'Б', id: 12 },
                { answerText: 'В', id: 13 },
                { answerText: 'Г', id: 14 },
                { answerText: 'Д', id: 15 }
            ]
        ],
    },

    {
        questionImage: [image10],
        answerType: 'multiSelect',
        questionText: "Впишіть відповіді:",
        correctArr: [1, 7, 13],
        answerOptions: [
            [
                { answerText: 'A', id: 1 },
                { answerText: 'Б', id: 2 },
                { answerText: 'В', id: 3 },
                { answerText: 'Г', id: 4 },
                { answerText: 'Д', id: 5 }
            ],
            [
                { answerText: 'A', id: 6 },
                { answerText: 'Б', id: 7 },
                { answerText: 'В', id: 8 },
                { answerText: 'Г', id: 9 },
                { answerText: 'Д', id: 10 }
            ],
            [
                { answerText: 'A', id: 11 },
                { answerText: 'Б', id: 12 },
                { answerText: 'В', id: 13 },
                { answerText: 'Г', id: 14 },
                { answerText: 'Д', id: 15 }
            ]
        ],
    }
];


export default questionsJSON;
