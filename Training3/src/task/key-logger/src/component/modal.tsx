import React, {useEffect, useMemo, useRef, useState} from 'react';

type ModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    onKeyPress: (text: string) => void,
}

const Modal = ({isOpen, handleClose, onKeyPress}: ModalProps) => {
    const ref = useRef() as React.MutableRefObject<HTMLTextAreaElement>
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

        if (ref && ref.current) {
            ref.current.addEventListener("keydown", handleKeyDown)

            return () => {
                ref.current.addEventListener("keydown", handleKeyDown)
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