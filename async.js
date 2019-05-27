// async functions

setTimeout(() => console.log('555'), 0);

const promise1 = Promise.resolve(123);
promise1.then(value => console.log(value));

const sayGoodbye = async() => {
    const good = 'goodbye';
    const sum = 1+2+3;
    const all = await Promise.all([good, sum]);
    console.log(all);
};

sayGoodbye();

const sayTouche = async() => {
    const touche = await 'touche';
    return touche;
};
sayTouche().then(say => console.log(say))
    .catch(err => console.error(err));

console.log('hello');
