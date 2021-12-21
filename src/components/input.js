import React from 'react';

const Input = ({label, error, ...props}) => {
    return (
        <label>
            {label}
            <input {...props}/>
            <span>{error}</span>
        </label>
    );
}

export default Input;