import React, {useState} from 'react';
import './App.css';
import Modal from "./components/modal-rfc";
import Progressbar from "./components/progress-bar-rfc";

interface Form  {
        inputFieldValue: string;
        error: string;
}



export const TestModalContent = () => {
    const [testForm, setTestForm] = useState<Form>({inputFieldValue:'', error:''});
    const [isStartProgress, setIsStartProgress] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const setValueAndError = (value: string, error: string) => {
        setTestForm((prevState) => ({inputFieldValue: value, error: error}));
    }

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (!Number(inputValue)) {
            if (inputValue !== '') {
                setValueAndError(e.target.value, 'Invalid input. Must be a number')
            } else {
                setValueAndError(e.target.value, 'Please input a number')
            }
        } else {
            if (Number(inputValue) < 0) {
                setValueAndError(e.target.value, 'Number must be greater than 0')
            } else {
                setValueAndError(e.target.value, '')
            }
        }
    }

    const handleStart = () => {
        setIsStartProgress((prevState) => true);
    }

    const onProgressTrigger = (progress: number) => {
        setProgress((prevState) => progress);
    }
    return (
        <div className="modal-content">
            <input type="text" placeholder="type something" value={testForm.inputFieldValue}
                   onChange={onFieldChange}/>
            <p>{testForm.error}</p>
            {isStartProgress &&
                <Progressbar width={Number(testForm.inputFieldValue)} progress={progress}
                             onTrigger={onProgressTrigger}/>}
            <div>
                <button disabled={testForm.error !== ''} onClick={handleStart}>Start</button>
            </div>
        </div>
    );
};



const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const handleModalOpenOrClose = () => {
        setIsModalOpen((prevState) => !prevState);
    }
    return (
        <div className="App">
            <button onClick={handleModalOpenOrClose}>Open Modal</button>
            {isModalOpen &&
            <Modal handleModalOpenOrClose={handleModalOpenOrClose} title="Test Modal"
                   content={<TestModalContent/>}/>}
        </div>
    );
};

export default App;