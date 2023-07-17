import React, {useEffect, useState} from 'react';

type ModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    onKeyPress: (text: string) => void,
}

const Modal = ({isOpen, handleClose, onKeyPress}: ModalProps) => {
    const [isRendered, setIsRendered] = useState<boolean>(false)

    let display = isOpen ? 'block' : 'none';

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true)
        }
    }, [isOpen]);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            onKeyPress(e.key);
        }
        const loggerArea = document.getElementById('textArea')
        if (loggerArea) {
            loggerArea.addEventListener("keydown", handleKeyDown)

            return () => {
                loggerArea.addEventListener("keydown", handleKeyDown)
            }
        }

    }, [isRendered]);


    return (
        <div className="modal" style={{display: `${display}`}}>
            {isRendered && <div>
                <div className="modal-header">
                    <h3>Write your letter</h3>
                    <button style={{display: "block"}} onClick={handleClose}>X</button>
                </div>
                <textarea id='textArea' placeholder="type your password"/>
            </div>}
        </div>
    );
};

export default Modal;