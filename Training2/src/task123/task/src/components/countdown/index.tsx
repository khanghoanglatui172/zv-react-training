import React, {useEffect, useState} from 'react';
import Progressbar from "../progress-bar-rfc";

type CountdownProps = {
    countDownNumber: number;
    isStop: boolean;
}

const Countdown = (props: CountdownProps) => {
    const {countDownNumber, isStop} = props
    const [progress, setProgress] = useState<number>(countDownNumber);

    useEffect(() => {
        const countdownTimeoutID = startCountdown();
        if (progress === 0) {
            clearTimeout(countdownTimeoutID)
        }
        if (isStop) {
            clearTimeout(countdownTimeoutID);
        }
        return () => {
            clearTimeout(countdownTimeoutID)
        }
    }, [progress])


    const startCountdown = () => {
        return setTimeout(() => {
            setProgress((prevState) => prevState - 1);
        }, 1000)
    }

    return (
        <div>
            <span>{progress}</span>
            <Progressbar barWidth={countDownNumber} progress={progress}/>
        </div>
    );
};

export default Countdown;