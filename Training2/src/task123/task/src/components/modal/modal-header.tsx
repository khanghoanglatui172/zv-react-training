import React, {Component} from 'react';

type ModalHeaderProps = {
    title: string;
    onClose: () => void
}

class ModalHeader extends React.Component<ModalHeaderProps> {
    render() {
        return (
            <div className="modal-header">
                <h3>{this.props.title}</h3>
                <button onClick={this.props.onClose}>X</button>
            </div>
        );
    }
}

export default ModalHeader;