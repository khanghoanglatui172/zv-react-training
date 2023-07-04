import React, {useEffect, useState} from 'react';

type ModalProps = {
    onKeyPress: (text: string) => void
}

const Modal = (props: ModalProps) => {
    useEffect(() => {
        const element: any = document.getElementById('typeArea');
        element.addEventListener("keydown", (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
           handleTxtAreaChange(e);
        })
    }, []);

    const handleTxtAreaChange = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        props.onKeyPress(e.key);
    }

    return (
        <div className="modal">
            <h3>Write your letter</h3>
            <textarea id="typeArea" placeholder="type your password"/>
        </div>
    );
};

export default Modal;