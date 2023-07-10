import React, {useEffect, useState} from 'react';
import Progressbar from "../progress-bar-rfc";

type CountdownProps = {
    countDownNumber: number;
}

const Countdown = (props: CountdownProps) => {
    const {countDownNumber} = props
    const [progress, setProgress] = useState<number>(countDownNumber);

    let countdownTimeoutID: NodeJS.Timer

    useEffect(() => {
        countdownTimeoutID = startCountdown();
        if (progress === 0) {
            clearTimeout(countdownTimeoutID)
        }
    }, [progress])

    useEffect(() => {
        return () =>  clearTimeout(countdownTimeoutID);
    }, [])

    const handleStop = () => {
        clearTimeout(countdownTimeoutID);
    }

    const startCountdown = () => {
        return setTimeout(() => {
            setProgress((prevState) => prevState - 1);
        }, 1000)
    }

    return (
        <div>
            <span>{progress}</span>
            <Progressbar barWidth={countDownNumber} progress={progress}/>
           <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Countdown;