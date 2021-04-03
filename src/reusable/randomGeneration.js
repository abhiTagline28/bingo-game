export const gfg_Run = (val) => {
    let arr = [];
    /* if (singleVal) {
        while (arr.length < 1) {
            let r = Math.floor(Math.random() * 25) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
    }
    else {
        while (arr.length < 9) {
            let r = Math.floor(Math.random() * 25) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
    } */
    while (arr.length < val) {
        var r = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

/* export const gfg_Run1 = () => {
    var arr = [];
    while (arr.length < 1) {
        var r = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
} */