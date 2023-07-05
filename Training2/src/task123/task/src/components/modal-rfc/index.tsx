import React from 'react';

type ModalProps = {
    title : string;
    children : React.ReactElement;
    setOpen: (isOpen: boolean) => void;
}

function Modal(props: ModalProps) {
    const {title, children, setOpen} = props;
    return (
        <div className="modal">
            <div className="modal-header">
                <h3>{title}</h3>
                <button onClick={() => setOpen(false)}>X</button>
            </div>
            {children && <div className="modal-content">{children}</div>}
        </div>
    );
}

export default Modal;