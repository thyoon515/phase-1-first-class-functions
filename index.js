function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function name() {
        console.log('Tae');
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('Random');
}