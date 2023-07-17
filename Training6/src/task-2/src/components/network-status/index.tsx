import React from 'react';

type NetworkStatusProps = {
    isOnline: boolean
}
const NetworkStatus = ({isOnline}: NetworkStatusProps) => {
    return (
        <div>
            <p>🌐 Network: {isOnline ? 'Online': 'Offline'}</p>
        </div>
    );
};

export default NetworkStatus;