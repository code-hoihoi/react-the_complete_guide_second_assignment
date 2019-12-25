import React from 'react';

const InputField = ( props ) => {
    
    return (
        <div>
            Your String: 
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default InputField;