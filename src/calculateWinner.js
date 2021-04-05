/* export function calculateWinner(squares) {
    console.log("squares : ", squares);
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        let abc = 'Win'
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log("We Win");
            return abc
        }
    }
    return null;
} */


export function calculateWinner(squares) {
    /* squares.length > 0 ?
        console.log("squares :", squares[0][0])
        : console.log(''); */
    console.log("squares -->: ", squares);
    let win = [];
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        let k;
        if (squares.length > 0) {
            squares.map((v, i) => {
                //console.log(`index : ${i} value : ${v}`);
                if (squares[i][a] === 'Y' && squares[i][b] === 'Y' && squares[i][c] === 'Y') {
                    //win.push('winner')
                    if (i === 0) k = 'First'
                    if (i === 1) k = 'Second'
                    if (i === 2) k = 'Third'
                    if (i === 3) k = 'Fourth'
                    if (i === 4) k = 'Fifth'

                    if (k in win) win[k].push('winner');
                    else win[k] = ['winner'];
                }
            })
        }
        /* if (squares.length > 0) {
            if (squares[0][a] === 'Y' && squares[0][b] === 'Y' && squares[0][c] === 'Y') {
                win.push('winner')
            }
        } */
    }

    /* if (squares.length > 0) {
        if (squares[0][0] === 'Y' && squares[0][1] === 'Y' && squares[0][2] === 'Y') {
            console.log("Winner");
        }
    } */

    return win;
}




