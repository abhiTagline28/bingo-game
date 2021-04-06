import React from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const ButtonComponent = ({ value }) => {
    return (
        <button style={style} >
            {value}
        </button >
    )
}

/* const ButtonComponent = ({ value }) => {
    return (
        <button style={{
            background: 'lightblue',
            border: '2px solid darkblue',
            fontSize: '30px',
            fontWeight: '800',
            cursor: 'pointer',
            outline: 'none'
        }} >
            {value}
        </button >
    )
} */

export default ButtonComponent
