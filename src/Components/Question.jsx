import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from '../questions';

export default function Question({ questionIndex, onSelectAnswer, onSkipAnswer}){
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 10000;

    if (answer.selectedAnswer){
        timer = 1000;
    }
    if (answer.isCorrect !== null){
        timer = 2000;
    }

    function handleSelectAnswer(ans){
        setAnswer({
            selectedAnswer: ans,
            isCorrect: null,
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: ans,
                isCorrect: ans === QUESTIONS[questionIndex].answers[0],
            })
             setTimeout(()  => {
                onSelectAnswer(ans);
            }, 2000);
        }, 1000)

       
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }
    else if(answer.selectedAnswer){
        answerState = 'answered';
    }

    return(
        <div id="question">
            <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer: null} mode={answerState}/>
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers 
                answers={QUESTIONS[questionIndex].answers} 
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>)
}