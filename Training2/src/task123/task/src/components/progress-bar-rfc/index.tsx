import React from 'react';

type ProgressBarProps = {
    barWidth: number;
    progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const {barWidth, progress} = props
    return (
        <>
            <div className="progress-bar" style={{width: `${barWidth}px`}}>
                <div style={{
                    position: "absolute",
                    width: `${progress}px`,
                    height: "100%",
                    background: "green"
                }}/>
            </div>
        </>
    );
};

export default ProgressBar;