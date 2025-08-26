import QUESTIONS from '../questions';
import quizCompletImage from '../assets/quiz-complete.png';

export default function Summary({userAnswers}){
    const skippedCount = userAnswers.filter(ans => ans === null).length;
    const skippedPercentage = Math.round((skippedCount / QUESTIONS.length) * 100);

    const correctCount = userAnswers.filter((ans, ind) => ans === QUESTIONS[ind].answers[0]).length;
    const correctPercentage =  Math.round((correctCount / QUESTIONS.length) * 100);

    // const incorrectCount = userAnswers.length - (skippedCount + CorrectCount);
    const incorrectPercentage =   Math.round(100.0 - (skippedPercentage + correctPercentage));

    return (
    <div id="summary">
        <img src={quizCompletImage} alt="Quiz Completed" />
        <h2>Quiz Completed</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>{skippedPercentage}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctPercentage}%</span>
                <span className='text'>Answered Correctly</span>
            </p>
            <p>
                <span className='number'>{incorrectPercentage}%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((ans, ind) => {
                let cssClass = 'user-answer';

                if(ans === null){
                    cssClass += ' skipped';
                }
                else if(ans === QUESTIONS[ind].answers[0]){
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return(
                <li key={ind}>
                    <h3> {ind + 1}</h3>
                    <p className='question'>{QUESTIONS[ind].text}</p>
                    <p className={cssClass}>{ans ? ans : "Skipped"}</p>
                </li>)
            })}
            </ol>
    </div>)
}