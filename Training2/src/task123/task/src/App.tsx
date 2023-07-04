import React, {Component} from 'react';
import './App.css'
import Modal from "./components/modal";
import Progressbar from "./components/progress-bar";

type TestModalContentState = {
    formGroup: {
        inputFieldValue: string;
        error: string;
    },
    isStartProgress: boolean,
    progress: number
}

export class TestModalContent extends React.Component<any, TestModalContentState> {
    constructor(props: {}) {
        super(props);
        this.state = {formGroup: {inputFieldValue: '', error: ''}, isStartProgress: false, progress: 0}
    }

    setValueAndError = (value: string, error: string) => {
        this.setState((prev: TestModalContentState) => ({formGroup: {inputFieldValue: value, error: error}}))
    }

    onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (!Number(inputValue)) {
            if (inputValue !== '') {
                this.setValueAndError(e.target.value, 'Invalid input. Must be a number')
            } else {
                this.setValueAndError(e.target.value, 'Please input a number')
            }
        } else {
            if (Number(inputValue) < 0) {
                this.setValueAndError(e.target.value, 'Number must be greater than 0')
            } else {
                this.setValueAndError(e.target.value, '')
            }
        }
    }

    handleStart = () => {
        this.setState((prevState: TestModalContentState) => ({isStartProgress: true}))
    }

    onProgressTrigger = (progress: number) => {
        console.log(progress);
        this.setState((prevState: TestModalContentState) => ({
            progress: progress
        }))
    }

    render() {
        return (
            <div className="modal-content">
                <input type="text" placeholder="type something" value={this.state.formGroup.inputFieldValue}
                       onChange={this.onFieldChange}/>
                <p>{this.state.formGroup.error}</p>
                {this.state.isStartProgress &&
                    <Progressbar width={Number(this.state.formGroup.inputFieldValue)} progress={this.state.progress}
                                 onTrigger={this.onProgressTrigger}/>}
                <div>
                    <button disabled={this.state.formGroup.error !== ''} onClick={this.handleStart}>Start</button>
                </div>
            </div>
        )
    };
}


type AppState = {
    isModalOpen: boolean
}

class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {isModalOpen: true}
    }

    handleModalOpenOrClose = () => {
        this.setState((prevState: { isModalOpen: boolean }) => ({isModalOpen: !prevState.isModalOpen}))
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleModalOpenOrClose}>Open Modal</button>
                {this.state.isModalOpen &&
                    <Modal handleModalOpenOrClose={this.handleModalOpenOrClose} title="Test Modal"
                           content={<TestModalContent/>}/>}
            </div>
        );
    }
}

export default App;