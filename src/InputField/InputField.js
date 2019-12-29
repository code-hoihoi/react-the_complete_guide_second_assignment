import React from 'react';

const InputField = ( props ) => {

    return (
        <div>
            <p>
                
                Your String: 
                <input type="text" 
                    onChange={props.changed} />
            </p>
            <p>
                {props.len}
            </p>
        </div>
    );
}

export default InputField;