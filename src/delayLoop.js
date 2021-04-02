export const delayLoop = ({ display, delay }) => {
    return (name, i) => {
        setTimeout(() => {
            display(name);
        }, i * delay);
    }
};