import React, {useEffect, useState} from 'react';
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
            <button onClick={() => setIsModalOpen(true)}>Open modal</button>
            <Modal keepMounted={true} isOpen={isModalOpen} handleClose={() => setIsModalOpen((false))} onKeyPress={handleKeyLog}/>
        </div>
    );
}

export default App;
