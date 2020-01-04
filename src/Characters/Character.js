import React from 'react';

const Character = (props) => {
    const charStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "DodgerBlue",
        color: "White",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <div>
            <p style={charStyle} onClick={props.click}>
                {props.character}
            </p>
        </div>
    )
}

export default Character;