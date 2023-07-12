import React, {useState} from 'react';
import './App.css';
import Modal from "./components/modal-rfc";
import Countdown from "./components/countdown";

interface Form {
    inputFieldValue: string;
    error: string;
}

export const TestModalContent = () => {
    const [testForm, setTestForm] = useState<Form>({inputFieldValue: '', error: ''});
    const [isStartCountdown, setIsStartCountdown] = useState<boolean>(false);
    const [tempValue, setTempValue] = useState<number>(0)
    const setValueAndError = (value: string, error: string) => {
        setTestForm(() => ({inputFieldValue: value, error: error}));
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
        setTempValue(+testForm.inputFieldValue);
        setIsStartCountdown((prevState) => !prevState);

    }

    const handleReset = () => {
        setTempValue(+testForm.inputFieldValue);
    }

    return (
        <div className="modal-content">
            <input type="text" placeholder="type something" onChange={onFieldChange}/>
            <p>{testForm.error}</p>
            {isStartCountdown &&
                <Countdown countDownNumber={tempValue}/>}
            <div>
                <button disabled={testForm.error !== ''} onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div className="App">
            <button onClick={showModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} handleClose={handleModalClose} title="Test Modal">
                <TestModalContent/>
            </Modal>
        </div>
    );
};

export default App;