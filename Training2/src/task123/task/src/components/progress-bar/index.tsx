import React, {Component} from 'react';

type ProgressBarProps = {
    width: number;
    progress: number
    onTrigger: (progress: number) => void
}

type ProgressBarState = {
    barWidth: number
}

class Progressbar extends React.Component<ProgressBarProps, ProgressBarState> {
    constructor(props: ProgressBarProps) {
        super(props);

        this.state = {
            barWidth: this.props.width,
        }
        if (this.props.progress !== 0) {
            this.state = {
                barWidth: this.props.progress
            }
        }
    }


    interval: any

    componentDidMount() {
        this.handleCountdown()
    }


    handleCountdown = () => {
        this.interval = setInterval(() => {
            this.setState((prev: ProgressBarState) => {
                return ({barWidth: prev.barWidth - 1})
            }, () => {
                if (this.state.barWidth === 0) {
                    this.clearProgressCountdown(this.interval)
                }
            })
        }, 100);
    }
    clearProgressCountdown = (s: any) => {
        clearInterval(s)
    }

    handleStopProgress = () => {
        this.clearProgressCountdown(this.interval);
        return this.props.onTrigger(this.state.barWidth)
    }

    render() {
        return (
            <>
                <span>{this.state.barWidth}</span>
                <div className="progress-bar" style={{width: `${this.props.width}px`}}>
                    <div style={{
                        position: "absolute",
                        width: `${this.state.barWidth}px`,
                        height: "100%",
                        background: "green"
                    }}/>
                </div>
                <button onClick={this.handleStopProgress}>stop</button>
            </>
        );
    }
}

export default Progressbar;