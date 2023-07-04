import React from 'react';
import ModalHeader from "../modal/modal-header";
import ModalContent from "../modal/modal-content";

type ModalProps = {
    title : string;
    content : React.ReactElement;
    handleModalOpenOrClose: () => void
}

function Modal(props: ModalProps) {
    return (
        <div className="modal">
            <ModalHeader title={props.title} onClose={props.handleModalOpenOrClose}/>
            <ModalContent content={props.content}/>
        </div>
    );
}

export default Modal;