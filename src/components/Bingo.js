import React, { useState, useEffect } from 'react'
import BoxComponent from './BoxComponent';
import CountDown from '../reusable/CountDown';
import DisplayAnswer from '../reusable/DisplayAnswer';
import { gfg_Run } from '../reusable/randomGeneration';
import SelectComponent from '../reusable/SelectComponent';
import ButtonComponent from '../reusable/ButtonComponent';
import { selectOption } from '../reusable/fieldsValue'
let id;

const Bingo = () => {
    const [bingoBox, setBingoBox] = useState([])
    const [numUsers, setNumUsers] = useState(0)
    const [ans, setAns] = useState([])
    const [ind, setInd] = useState('')
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState()

    const opt = [
        {
            id: "0",
            val: 'Select'
        },
        {
            id: 1,
            val: 'One'
        },
        {
            id: 2,
            val: 'Two'
        },
        {
            id: 3,
            val: 'Three'
        },
        {
            id: 4,
            val: 'Four'
        },
        {
            id: 5,
            val: 'Five'
        },
    ]

    const setAnswer1 = () => {
        setInd(1)
        id = setInterval(() => {
            let x = gfg_Run(1);
            setIndex1(x)
            setIndex(index => index + 1)
            setInd('')
        }, 10000)
    }

    useEffect(() => {
        if (numUsers) {
            let list = []
            for (let i = 0; i < numUsers; i++) {
                list.push(gfg_Run(9))
            }
            setBingoBox(list)
        }
    }, [numUsers])
    useEffect(() => {
        let an = gfg_Run();
        setAns(an);
    }, [])
    useEffect(() => {
        index > 8 ? clearInterval(id) : console.log("index : ", index);
    }, [index])
    return (
        <>
            <div style={{ marginLeft: '50px', marginTop: '60px' }}>
                <SelectComponent optVal={opt} onSelectChange={selectedValue => setNumUsers(Number(selectedValue))} />
            </div>
            {
                ind ? <CountDown /> : null
            }
            {
                index1 ? <DisplayAnswer val={index1} /> : null
            }
            <div style={{ height: '350px', padding: '20px' }}>
                {
                    bingoBox ?
                        bingoBox.map((v, i) => {
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
                    <ButtonComponent handleClick={setAnswer1} label="Start Game" />
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