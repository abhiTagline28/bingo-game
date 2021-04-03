import React from 'react'

const DisplayAnswer = (props) => {
    return (
        <div style={{ marginTop: '15px' }} className="text-center">
            <h1>{`value is : ${props.val}`}</h1>
        </div>
    )
}

export default DisplayAnswer;


