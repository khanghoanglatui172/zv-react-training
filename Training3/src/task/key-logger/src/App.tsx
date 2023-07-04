import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./component/modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [keyLogger, setKeyLogger] = useState<string>('')

    useEffect(()=>{
        console.log(keyLogger)
    },[keyLogger])

    const handleKeyLog = (key: string) => {
        setKeyLogger((prevState) => prevState.concat(key))
    }

    return (
        <div className="App">
            <button onClick={() => setIsModalOpen((prevState) => !prevState)}>Open modal</button>
            {isModalOpen && <Modal onKeyPress={handleKeyLog}/>}
        </div>
    );
}

export default App;
