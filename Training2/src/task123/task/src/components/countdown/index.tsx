import React, {useEffect, useState} from 'react';
import Progressbar from "../progress-bar-rfc";

type CountdownProps = {
    countDownNumber: number;
    isStop: boolean;
}
let countdownTimeoutID: NodeJS.Timeout
const Countdown = (props: CountdownProps) => {
    const {countDownNumber, isStop} = props
    const [progress, setProgress] = useState<number>(countDownNumber);


    useEffect(() => {
        if(countDownNumber){
            setProgress(countDownNumber);
        }
        return () => {
            clearTimeout(countdownTimeoutID);
        }
    } ,[countDownNumber])

    useEffect(() => {
        if(isStop){
            clearTimeout(countdownTimeoutID);
        }
    } ,[isStop])

    useEffect(() => {
        startCountdown();
    }, [progress])


    const startCountdown = () => {
        countdownTimeoutID = setTimeout(() => {
            setProgress((prevState) => prevState - 1);
        } , 1000)
        if(progress === 0) {
            clearTimeout(countdownTimeoutID)
        }
    }

    return (
        <div>
            <span>{progress}</span>
            <Progressbar barWidth={countDownNumber} progress={progress}/>
        </div>
    );
};

export default Countdown;