import React from 'react'
import ButtonComponent from './ButtonComponent'

const style = {
    border: '2px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const BoxComponent = ({ sqr }) => {
    //console.log("sqr : ", sqr);
    return (
        <div style={style}>
            {
                sqr.map((val, i) => (
                    <ButtonComponent key={i} value={val} />
                ))
            }

        </div>
    )
}

export default BoxComponent
