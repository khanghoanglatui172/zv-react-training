import React, {JSX} from 'react';

type ModalContentProps = {
    content?: JSX.Element;
}
function ModalContent(props: ModalContentProps) {
    return (
        <div className="modal-content">
            {props.content}
        </div>
    );
}

export default ModalContent;