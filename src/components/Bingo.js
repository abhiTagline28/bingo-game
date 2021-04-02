import React, { useState, useEffect } from 'react'
import BoxComponent from './BoxComponent';

const gfg_Run = () => {
    var arr = [];
    while (arr.length < 9) {
        var r = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

const Bingo = () => {

    const [bingoBox, setBingoBox] = useState([])
    const [numUsers, setNumUsers] = useState(0)
    const [ans, setAns] = useState([])
    const [index, setIndex] = useState(0)


    useEffect(() => {
        if (numUsers) {
            let list = []
            for (let i = 0; i < numUsers; i++) {
                list.push(gfg_Run())
            }
            setBingoBox(list)
        }

    }, [numUsers])
    useEffect(() => {
        let an = gfg_Run();
        setAns(an);
    }, [])

    const Display = (props) => {
        return (
            <div style={{ marginTop: '15px' }} className="text-center">
                <h1>{`value is : ${props.val}`}</h1>
            </div>
        )
    }
    const setAnswer = () => {

        setInterval(() => {
            console.log("Hello");
            setIndex(index + 1)
        }, 2000)


        /* setTimeout(() => {
            setIndex(index + 1)
        }, 3000) */
    }
    return (
        <>
            <div style={{ marginLeft: '50px', marginTop: '60px' }}>
                <select onChange={e => setNumUsers(Number(e.target.value))} style={{ width: '550px' }} className="form-select">
                    <option value="0">Select No. of Players</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </div>

            <div style={{ marginTop: '15px' }} className="text-center">
                <h1>{`value is : ${ans}`}</h1>
            </div>
            {/* names.forEach((name, i) => {
                setTimeout(() => {
                    display(name);
                }, i * 1000);
            }) */}
            {/* {
                ans[index]
                ans ?
                    ans.forEach((val, i) => {
                        setTimeout(() => {
                            console.log("val : ", val);
                            {
                                <Display val={val} />
                            }

                        }, i * 1000);
                    })
                    : null
            } */}

            <Display val={ans[index]} />

            <div style={{ height: '350px', padding: '20px' }}>
                {
                    bingoBox ?
                        bingoBox.map((v, i) => {
                            console.log("bingo v : ", v);
                            console.log("bingoBox : ", bingoBox);
                            return (
                                <div key={i} style={{ float: 'left', marginLeft: '50px', marginTop: '60px' }}>
                                    <BoxComponent sqr={bingoBox[i]} />
                                </div>
                            )
                        })
                        : null
                }
            </div>
            {
                numUsers ?
                    <div style={{ marginTop: '10px' }} className="text-center">
                        <button className="btn btn-primary" onClick={setAnswer}>Start Game</button>
                    </div>
                    : null

            }

        </>
    )
}

export default Bingo


/* {
    bingoBox ?
    bingoBox.map((i) => {
            console.log("bingoBox : ", bingoBox);
            return (
                <div style={{ float: 'left', marginLeft: '50px', marginTop: '60px' }}>
                    <BoxComponent sqr={bingoBox} />
                </div>
            )
        })
        : null
} */