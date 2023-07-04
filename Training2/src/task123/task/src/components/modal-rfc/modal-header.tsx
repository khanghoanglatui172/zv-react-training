import React from 'react';
type ModalHeaderProps = {
    title: string;
    onClose: () => void
}
function ModalHeader(props: ModalHeaderProps) {
    return (
        <div className="modal-header">
            <h3>{props.title}</h3>
            <button onClick={props.onClose}>X</button>
        </div>
    );
}

export default ModalHeader;