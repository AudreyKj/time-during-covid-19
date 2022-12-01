import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BarChart } from './BarChart'
import Draggable from 'react-draggable';


export function SurveyTwo() {
    const [dataSurveyTwo, setDataSurveyTwo] = useState(false);
    const [alredyAnswered, setAlreadyAnswered] = useState(false);

    useEffect(() => {
        const surveyTwoAnswered = sessionStorage.getItem('surveyTwo');
        if (surveyTwoAnswered) setAlreadyAnswered(true);
    }, [])

    const submitFearFuture = () => {
        axios.post("/user/feeling/fear").then((res) => {
            console.log('/user/feeling/fear', res)
            sessionStorage.setItem('surveyTwo', 'answered');

            showAnswerSurveyUserFeeling()

        }).catch(error => console.log(error))
    }


    const submitNegationstalgiaPast = () => {
        axios.post("/user/feeling/nostalgia").then(() => {
            sessionStorage.setItem('surveyTwo', 'answered');

            showAnswerSurveyUserFeeling()

        }).catch(error => console.log(error))
    }

    const submitFine = () => {
        axios.post("/user/feeling/normal").then(() => {
            sessionStorage.setItem('surveyTwo', 'answered');

            showAnswerSurveyUserFeeling()

        }).catch(error => console.log(error))
    }


    const showAnswerSurveyUserFeeling = () => {
        axios.get("/users/feeling/results")
            .then((res) => {

                setDataSurveyTwo(res.data);


            }).catch(error => console.log(error))

    }

    const collapseSurveyAnswers = () => {
        setDataSurveyTwo(false)
        setAlreadyAnswered(true)
    }


    return (
        <Draggable>
            <div className="surveyTwo">
                <div className="question2">
                    <div className="surveyQuestion">
                        <span className="survey">HOW DO YOU FEEL?</span>
                    </div>

                    <div className="surveyAnswers">
                        {!dataSurveyTwo && !alredyAnswered && (
                            <>
                                <button className="questionButton marginRight" onClick={submitFearFuture}> FEARFUL   </button>

                                <button className="questionButton marginRight" onClick={submitNegationstalgiaPast}> NOSTALGIC </button>

                                <button className="questionButton" onClick={submitFine}> FINE </button>
                            </>
                        )}

                        {alredyAnswered && !dataSurveyTwo && (
                            <>
                                <span className="showSurveyAnswers" onClick={showAnswerSurveyUserFeeling}> SEE ANSWERS </span>
                            </>
                        )}

                        {dataSurveyTwo && (
                            <>
                                <BarChart val={dataSurveyTwo} />
                                <span className="collapseArrow" onClick={collapseSurveyAnswers}>↑</span>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </Draggable>
    )

}




