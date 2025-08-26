import { useState, useCallback, useRef } from "react";

import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

const TIMER = 10000; 

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizFinished = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns){
        setUserAnswers(prev => [...prev, selectedAns])
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isQuizFinished) {
        return <Summary userAnswers={userAnswers}/>
    }
    

    return(
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>

        );
    }