import React, {useEffect, useState} from 'react';

type ProgressBarProps = {
    width: number;
    progress: number
    onTrigger: (progress: number) => void
}

const ProgressBar = (props: ProgressBarProps) => {
    const [barWidth, setBarWidth] = useState<number>(props.width);
    const [isStop, setIsStop] = useState<boolean>(false);

    useEffect(() => {
        if(barWidth !== 0 && !isStop) {
            setTimeout(() => {
                setBarWidth((prevState) => prevState - 1);
            },100)
        }
    },[barWidth, isStop])

    const handleStopProgress = () => {
        setIsStop((prevState) => !prevState);
        return props.onTrigger(barWidth)
    }

    return (
        <>
            <span>{barWidth}</span>
            <div className="progress-bar" style={{width: `${props.width}px`}}>
                <div style={{
                    position: "absolute",
                    width: `${barWidth}px`,
                    height: "100%",
                    background: "green"
                }}/>
            </div>
            <button onClick={handleStopProgress}>stop</button>
        </>
    );
};

export default ProgressBar;