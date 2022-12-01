import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BarChart } from './BarChart';
import Draggable from 'react-draggable';


export function SurveyThree() {
    const [dataSurveyThree, setDataSurveyThree] = useState(false);
    const [alredyAnswered, setAlreadyAnswered] = useState(false);

    useEffect(() => {
        const surveyThreeAnswered = sessionStorage.getItem('surveyThree');
        if (surveyThreeAnswered) setAlreadyAnswered(true);
    }, [])

    const showAnswerSurveyUserMood = () => {
        axios.get("/users/mood/results")
            .then((res) => {
                console.log('mood results', res);
                sessionStorage.setItem('surveyThree', 'answered');

                setDataSurveyThree(res.data);

            }).catch(error => console.log(error))

    }

    const submitTornado = () => {
        const surveyThreeAnswered = sessionStorage.getItem('surveyThree');

        if (surveyThreeAnswered) {
            showAnswerSurveyUserMood()
            return;
        }

        axios.post("/user/moodRepresentation/tornado").then(() => {
            showAnswerSurveyUserMood()
        }).catch(error => console.log(error))
    }

    const submitSeed = () => {
        const surveyThreeAnswered = sessionStorage.getItem('surveyThree');

        if (surveyThreeAnswered) {
            showAnswerSurveyUserMood()
            return;
        }

        axios.post("/user/moodRepresentation/seed").then(() => {
            showAnswerSurveyUserMood()
        }).catch(error => console.log(error))
    }

    const submitRose = () => {
        const surveyThreeAnswered = sessionStorage.getItem('surveyThree');

        if (surveyThreeAnswered) {
            showAnswerSurveyUserMood()
            return;
        }

        axios.post("/user/moodRepresentation/rose").then(() => {
            showAnswerSurveyUserMood()
        }).catch(error => console.log(error))
    }

    const collapseSurveyAnswers = () => {
        setDataSurveyThree(false)
        setAlreadyAnswered(true)
    }


    return (
        <Draggable>
            <div className="surveyThree">
                <div className="question3">
                    <div className="surveyQuestion">
                        <span className="survey">WHAT IS YOUR MOOD?</span>
                    </div>

                    <div className="surveyAnswers">
                        {!dataSurveyThree && !alredyAnswered && (
                            <>
                                <button className="questionButton marginRight" onClick={submitTornado}> <span className="emojiSurvey" role="img" aria-label="emoji-survey">🌪️</span>  </button>

                                <button className="questionButton marginRight" onClick={submitRose}> <span className="emojiSurvey" role="img" aria-label="emoji-survey">🥀 </span></button>

                                <button className="questionButton" onClick={submitSeed}> <span className="emojiSurvey" role="img" aria-label="emoji-survey">🌱</span> </button>
                            </>
                        )}

                        {alredyAnswered && !dataSurveyThree && (
                            <>

                                <span className="showSurveyAnswers" onClick={showAnswerSurveyUserMood}> SEE ANSWERS </span>

                            </>
                        )}

                        {dataSurveyThree && (
                            <>
                                <BarChart val={dataSurveyThree} emoji={true} />

                                <span className="collapseArrow" onClick={collapseSurveyAnswers}>↑</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Draggable>
    )
}









