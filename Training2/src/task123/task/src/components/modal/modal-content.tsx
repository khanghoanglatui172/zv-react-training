import React, {Component, JSX} from 'react';


type ModalContentProps = {
    content?: JSX.Element;
}

class ModalContent extends React.Component<ModalContentProps> {
    render() {
        return (
            <div className="modal-content">
                {this.props.content}
            </div>
        );
    }
}

export default ModalContent;