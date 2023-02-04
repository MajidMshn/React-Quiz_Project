import React, { Component } from 'react'
import './Quiz.css';
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    questionText: "what is the capital of france?",
                    questionAnswers: [
                        { answerText: "New York", isCorrect: 'false' },
                        { answerText: "London", isCorrect: 'false' },
                        { answerText: "Paris", isCorrect: 'true' },
                        { answerText: "Dublin", isCorrect: 'false' },
                    ]
                },
                {
                    questionText: "Who is CEO Tesla?",
                    questionAnswers: [
                        { answerText: "Jeff Bezos", isCorrect: 'false' },
                        { answerText: "Elon Musk", isCorrect: 'true' },
                        { answerText: "Bill Gates", isCorrect: 'true' },
                        { answerText: "Tony Stark", isCorrect: 'false' },
                    ]
                },
                {
                    questionText: "what is the capital of Iran?",
                    questionAnswers: [
                        { answerText: "New York", isCorrect: 'false' },
                        { answerText: "London", isCorrect: 'false' },
                        { answerText: "Paris", isCorrect: 'false' },
                        { answerText: "Tehran", isCorrect: 'true' },
                    ]
                },
                {
                    questionText: "The iPhone was created by which company?",
                    questionAnswers: [
                        { answerText: "Apple", isCorrect: 'true' },
                        { answerText: "intel", isCorrect: 'false' },
                        { answerText: "Amzon", isCorrect: 'false' },
                        { answerText: "Digikala", isCorrect: 'false' },
                    ]
                },
            ],
            currentQuiz: 0,
            showScore: false,
            score: 0

        }
    }

    handleAnswer(e) {
        if (e.target.value === "true") {
            this.setState({ score: this.state.score + 1 })
        }
        this.setState({ currentQuiz: this.state.currentQuiz + 1 })
        if (this.state.currentQuiz === 3) {
            this.setState({ showScore: true })
        }

    }
    render() {
        return (
            <div className='Qmain'>

                <div className="Qbtns">
                    {!this.state.showScore && this.state.questions[this.state.currentQuiz].questionAnswers.map(
                        (item) => (<button value={item.isCorrect} onClick={(e) => this.handleAnswer(e)}>{item.answerText}</button>)
                    )}
                </div>

                <div className="Qtitle">
                    {
                        !this.state.showScore &&
                        <><h4>question {this.state.currentQuiz + 1}/4</h4>
                            <p> {this.state.questions[this.state.currentQuiz].questionText}</p>
                        </>
                    }

                </div>

                {this.state.showScore && <h1 className='score'>
                    your score is : {this.state.score}
                </h1>}
            </div >
        )
    }
}
