// Core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { questionsData } from "../../API/questionsData"

// Components
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Label } from '../Label/Label';

// Style
import "./style/Question.scss";

export const Question = () => {
    const [question, setQuestion] = useState(0);
    const [showResultPage, setShowResultPage] = useState(false);
    const [score, setScore] = useState(0);
    const [showAnwser, setShowAnwser] = useState(false);

    const anwserClick = (isCorrect: boolean) => {
        setShowAnwser(true)
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = question + 1;
        if (nextQuestion < questionsData.length) {
            setTimeout(() => {
                setShowAnwser(false);
                setQuestion(nextQuestion);
            }, 2500);
        } else {
            setShowResultPage(true);
        }
    };
    return (
        <div className="question__entire-card">
            <Card height="auto">
                <div className="question__question">
                    <Label fontSize={50} boldFont caps text={questionsData[question].question} />
                </div>
            </Card>
            <Card height="auto">
                <div className="questions__container">
                    <div className="questions">
                        <div className="question__container">
                            <div>{questionsData[question].anwsers.map((data, key) => {
                                return (
                                    <div className="question__question--anwser" key={key}>
                                        <Button color="#000" backgroundColor={showAnwser ? (data.isCorrect ? '#25B26F' : '#B21B05') : '#F1F1F1'} buttonText={data.anwserText} onClick={() => anwserClick(data.isCorrect)} />
                                    </div>
                                )
                            })}
                            </div>
                            {showResultPage && (
                                <Link to={`/resultpage/${score}`}>
                                    <div className="question__result-button">
                                        <Button buttonText="Go to your result!" onClick={() => { }} />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
