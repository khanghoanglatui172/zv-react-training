import React, {useEffect, useState} from 'react';

type ModalProps = {
    title: string;
    isOpen: boolean;
    children: React.ReactElement;
    handleClose: (isOpen: boolean) => void;
}

function Modal(props: ModalProps) {
    const {title, children, handleClose, isOpen} = props;
    const [isRendered, setIsRendered] = useState<boolean>(isOpen)
    let display = isOpen ? 'block' : 'none';

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        }
    }, [isOpen])

    return (
        <div className="modal">
            {isRendered && <div className="modal-content" style={{display: `${display}`}}>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button onClick={() => handleClose(false)}>X</button>
                </div>
                {children && <div>{children}</div>}
            </div>}
        </div>
    );
}

export default Modal;