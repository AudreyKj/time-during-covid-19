import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BarChart } from './BarChart'
import Draggable from 'react-draggable';


export function SurveyOne() {
    const [dataSurveyOne, setDataSurveyOne] = useState();
    const [alredyAnswered, setAlreadyAnswered] = useState(false);

    useEffect(() => {
        const surveyOneAnswered = sessionStorage.getItem('surveyOne');
        if (surveyOneAnswered) setAlreadyAnswered(true);
    }, [])

    const submitAssertion = () => {
        axios.post("/user/timeperception/assertion").then(() => {
            sessionStorage.setItem('surveyOne', 'answered');
            showAnswerSurveyTimePerception()
        }).catch(error => console.log(error))
    }

    const submitNegation = () => {
        axios.post("/user/timeperception/negation").then(() => {
            sessionStorage.setItem('surveyOne', 'answered');
            showAnswerSurveyTimePerception()
        }).catch(error => console.log(error))
    }

    const showAnswerSurveyTimePerception = () => {
        axios.get("/users/timeperception/results")
            .then((res) => {
                setDataSurveyOne(res.data);
                setAlreadyAnswered(false)
            }).catch(error => console.log(error))

    }

    const collapseSurveyAnswers = () => {
        setDataSurveyOne(false)
        setAlreadyAnswered(true)
    }


    return (
        <Draggable>
            <div className="surveyOne">
                <div className="question1">
                    <div className="surveyQuestion">
                        <span className="survey"> HAS YOUR PERCEPTION OF TIME CHANGED?</span>
                    </div>


                    <div className="surveyAnswers">
                        {!dataSurveyOne && !alredyAnswered && (
                            <>

                                <button className="questionButton marginRight" onClick={submitAssertion}>YES </button>

                                <button className="questionButton" onClick={submitNegation}> NO</button>
                            </>
                        )}

                        {alredyAnswered && !dataSurveyOne && (
                            <>
                                <span className="showSurveyAnswers" onClick={showAnswerSurveyTimePerception}> SEE ANSWERS </span>
                            </>
                        )}

                        {dataSurveyOne && (
                            <>
                                <BarChart val={dataSurveyOne} surveyOne={true} />
                                <span className="collapseArrow" onClick={collapseSurveyAnswers}>↑</span>
                            </>
                        )}



                    </div>
                </div>
            </div>

        </Draggable>
    )
}










