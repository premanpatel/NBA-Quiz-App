import {useRef} from 'react';
import QUESTIONS from '../questions';

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
     const shuffledAnswers = useRef();
    
    if (!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }
    return <ul id="answers">
                {shuffledAnswers.current.map((ans, ind) => {
                    const isSelected = selectedAnswer === ans;
                    let cssClass = '';
                    if(answerState === 'answered' && isSelected ){
                        cssClass = 'selected';
                    }

                    if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                    }

                    return (
                        <li key={ind} className="answer">
                            <button onClick={() => onSelect(ans)} className={cssClass} disabled={answerState !== ''}>{ans}</button>
                        </li>)
                })}
            </ul>
}