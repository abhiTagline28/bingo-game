import React, { useState, useEffect } from 'react'
import BoxComponent from './BoxComponent';
import CountDown from '../reusable/CountDown';
import DisplayAnswer from '../reusable/DisplayAnswer';
import { gfg_Run, gfg_Run1 } from '../reusable/randomGeneration';
import SelectComponent from '../reusable/SelectComponent';
import ButtonComponent from '../reusable/ButtonComponent';
import { calculateWinner } from '../calculateWinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uniqueVal from '../uniqueData'
let id;
let playErWin = [];
const Bingo = () => {
    const [bingoBox, setBingoBox] = useState([])
    const [numUsers, setNumUsers] = useState(0)
    const [ans, setAns] = useState([])
    const [ind, setInd] = useState('')
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState()
    const winner = calculateWinner(bingoBox);

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

    const checkWinner = () => {
        let keys = Object.keys(winner)
        if (keys.length > 0) {
            Object.keys(winner).map(function (key) {
                if (winner[key].length > 4) {
                    playErWin.push(key)
                }
            });
        }
    }
    checkWinner();

    const setAnswer1 = () => {
        setInd(1)
        id = setInterval(() => {
            let x = gfg_Run1();
            setIndex1(x)
            setIndex(index => index + 1)
            setInd('')
        }, 10000)
    }
    const setMatchedAns = () => {
        if (index1) {
            bingoBox.map((val, i) => {
                let ab = val.indexOf(Number(index1));
                if (ab >= 0) setBingoBox(oldVal => [...oldVal, bingoBox[i][ab] = 'Y'])
            })
        }
    }
    setMatchedAns();

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
    useEffect(() => {
        if (playErWin.length > 0) {
            toast.error(`Player ${uniqueVal(playErWin)} won the Game`, {
                position: "top-center"
            });
        }
        if (playErWin.length > 0 || index > 24) clearInterval(id)
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
            <ToastContainer />
        </>
    )
}
export default Bingo
