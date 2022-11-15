import React from 'react';

const DefaultButton = ({ title, onClick }) => {
    return <button
        style={{ background: 'red' }}
        onClick={() => {
            onClick();
        }}>{title}</button>
}

export default DefaultButton;