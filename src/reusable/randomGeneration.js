export const gfg_Run = () => {
    let arr = [];
    while (arr.length < 25) {
        var r = Math.floor(Math.random() * 25) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

let arr1 = [];
export const gfg_Run1 = () => {
    let arr = [];
    while (arr.length < 1) {
        var r = Math.floor(Math.random() * 25) + 1;
        if (arr1.indexOf(r) === -1) {
            arr.push(r);
            arr1.push(r);
        }
    }
    return arr
}