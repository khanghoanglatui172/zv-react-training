import React, {Component} from 'react';
import ModalHeader from "./modal-header";
import ModalContent from "./modal-content";

type ModalProps = {
    title : string;
    content : React.ReactElement;
    handleModalOpenOrClose: () => void
}
type ModalState = {
    isClosed: boolean
}
class Modal extends React.Component<ModalProps, ModalState> {
    render() {
        return (
            <div className="modal">
                <ModalHeader title={this.props.title} onClose={this.props.handleModalOpenOrClose}/>
                <ModalContent content={this.props.content}/>
            </div>
        );
    }
}

export default Modal;