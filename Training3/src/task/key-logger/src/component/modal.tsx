import React, {useEffect, useRef, useState} from 'react';

type ModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    onKeyPress: (text: string) => void,
}

const Modal = ({isOpen, handleClose, onKeyPress}: ModalProps) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    const [isRendered, setIsRendered] = useState<boolean>(false)
    let display = isOpen ? 'block' : 'none';

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true)
        }
    }, [isOpen]);

    useEffect(() => {
        const handleTxtAreaChange = (e: KeyboardEvent) => {
            onKeyPress(e.key);
        }

        if (ref.current) {
            ref.current.addEventListener("keydown", handleTxtAreaChange)
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener("keydown", handleTxtAreaChange)
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
                <textarea ref={ref} id="typeArea" placeholder="type your password"/>
            </div>}
        </div>
    );
};

export default Modal;