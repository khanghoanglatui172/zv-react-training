import React, {useEffect, useRef, useState} from 'react';
import Progressbar from "../progress-bar-rfc";

type CountdownProps = {
    countDownNumber: number;
}

const Countdown = (props: CountdownProps) => {
    const {countDownNumber} = props
    const countdownID = useRef<NodeJS.Timer>()
    const [progress, setProgress] = useState<number>(countDownNumber);

    useEffect(() => {
        countdownID.current = startCountdown();
        return () => clearInterval(countdownID.current);
    }, [])

    useEffect(() => {
        setProgress(countDownNumber)
    }, [countDownNumber])

    const handlePause = () => {
        clearInterval(countdownID.current);
    }

    const handleResume = () => {
        countdownID.current = startCountdown();
    }

    const startCountdown = () => {
        return setInterval(() => {
            setProgress((prevState) => {
                if (prevState === 0) return prevState
                return prevState - 1
            });
        }, 1000)
    }

    return (
        <div>
            <span>{progress}</span>
            <Progressbar barWidth={countDownNumber} progress={progress}/>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>Resume</button>
        </div>
    );
};

export default Countdown;