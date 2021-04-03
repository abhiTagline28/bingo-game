import React from 'react'

const SelectComponent = (props) => {
    console.log("p : ", props.optVal);
    const setNumUsers = (e) => {
        let x = e.target.value;
        props.onSelectChange(x);
    };
    return (
        <>
            <select style={{ width: '550px' }} className="form-select"
                onChange={setNumUsers}
                style={{ width: "550px" }}
                className="form-select"
            >
                {/* {
                    props.optVal?.map((v, i) => {
                        <option value={v.id}>{v.val}</option>
                    })
                } */}
                <option value="0">Select No. of Players</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
        </>
    )
}

export default SelectComponent


{

    // Bingo select 

    /* <div style={{ marginLeft: '50px', marginTop: '60px' }}>
                <select onChange={e => setNumUsers(Number(e.target.value))} style={{ width: '550px' }} className="form-select">
                    <option value="0">Select No. of Players</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </div> */}
