import { useEffect, useState } from "react";


const TIMER = 3000;

export default function Progressbar({timer}){
    const [timeRemaining, setTimeRemaining] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(prev => { prev - 10});
        })
        return () => clearInterval(interval);
    }, [])
    return  <progress value={timeRemaining} max={timer}/>
    
}