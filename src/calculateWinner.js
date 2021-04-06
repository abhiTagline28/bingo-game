export function calculateWinner(squares) {
    let win = {};
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

    const lines1 = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ]

    const lines2 = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ]

    for (let i = 0; i < lines2.length; i++) {
        const [a, b, c, d, e] = lines2[i];
        let k;
        if (squares.length > 0) {
            squares.map((v, i) => {
                //console.log(`index : ${i} value : ${v}`);
                if (squares[i][a] === 'Y' && squares[i][b] === 'Y' && squares[i][c] === 'Y' && squares[i][d] === 'Y' && squares[i][e] === 'Y') {
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
    }

    /* for (let i = 0; i < lines.length; i++) {
       const [a, b, c] = lines[i];
       let k;
       if (squares.length > 0) {
           squares.map((v, i) => {
               //console.log(`index : ${i} value : ${v}`);
               if (squares[i][a] === 'Y' && squares[i][b] === 'Y' && squares[i][c] === 'Y') {
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
   } */

    return win;
}

