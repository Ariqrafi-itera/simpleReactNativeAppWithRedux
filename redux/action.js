export const addCounter = (counter) => ({
    type: 'ADD',
    data: counter
});

export const minCounter = (counter) => ({
    type: 'SUBSTRACT',
    data: counter
});