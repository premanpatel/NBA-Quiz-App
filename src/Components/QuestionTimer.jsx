import React, { useState, useEffect } from 'react';

export default function QuestionTimer({timeout, onTimeout, mode}) {
    const [timeRemaining, setTimeRemaining] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onTimeout])
    
    

    
    useEffect(() => {
       const interval = setInterval(() => {
            setTimeRemaining(prev => prev - 100);
        }, 100)

        return () => clearInterval(interval);
        
    }, [timeout])
    // console.log("timeremaining 2", timeRemaining);

    return <progress id="question-timer" value={timeRemaining} max={timeout} className={mode}/>
}