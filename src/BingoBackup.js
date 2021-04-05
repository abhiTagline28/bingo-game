import React, { useState, useEffect } from 'react'
import BoxComponent from './BoxComponent';
import CountDown from '../reusable/CountDown';
import DisplayAnswer from '../reusable/DisplayAnswer';
import { gfg_Run, gfg_Run1 } from '../reusable/randomGeneration';
import SelectComponent from '../reusable/SelectComponent';
import ButtonComponent from '../reusable/ButtonComponent';
import { selectOption } from '../reusable/fieldsValue';
import { calculateWinner } from '../calculateWinner'
let id;
let xyz = 0;
const Bingo = () => {
    const [bingoBox, setBingoBox] = useState([])
    const [numUsers, setNumUsers] = useState(0)
    const [ans, setAns] = useState([])
    const [ind, setInd] = useState('')
    const [index, setIndex] = useState(0)
    const [index1, setIndex1] = useState()
    //const winner = calculateWinner(bingoBox);
    //console.log("Winer : ", winner);
    console.log("bingoBox : ", bingoBox);

    // if (bingoBox[0] === "Y" && bingoBox[1] === "Y" && bingoBox[2] === "Y") {
    //     console.log('Winner')
    // }

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
            let x = gfg_Run1();
            setIndex1(x)
            setIndex(index => index + 1)
            setInd('')
        }, 5000)
    }

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
        index > 8 ? clearInterval(id) : console.log('');
        // bingoBox.map((val, i) => {
        //     let ab = val.indexOf(Number(index1));
        //     //setBingoBox(bingoBox[i][ab] = 'Y')
        //     bingoBox[i][ab] = 'Y'
        //     //console.log(`val : ${val} i : ${i}    Value : ${index1} index : ${ab}`);
        // })

    }, [index])

    const setMatchedAns = () => {
        //let x;
        // let ab
        index1 ?
            bingoBox.map((val, i) => {
                let ab = val.indexOf(Number(index1));
                //setBingoBox(bingoBox[i][ab] = 'Y')
                // bingoBox[i][ab] = 'Y'
                ab >= 0 ?
                    setBingoBox(oldVal => [...oldVal, bingoBox[i][ab] = 'Y'])
                    //console.log(`val : ${val} i : ${i}    Value : ${index1} index : ${ab}`);
                    : console.log('');
            })
            //setBingoBox(oldVal => [...oldVal, bingoBox[0][1] = 'Y'])
            : console.log('');
    }
    setMatchedAns();
    // index1 ?
    //     bingoBox.map((val, i) => {
    //         let ab = val.indexOf(Number(index1));
    //         setBingoBox(bingoBox[i][ab] = 'Y')
    //         //bingoBox[i][ab] = 'Y'
    //         //console.log(`val : ${val} i : ${i}    Value : ${index1} index : ${ab}`);
    //     })
    //     : console.log('');
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
