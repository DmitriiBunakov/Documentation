console.log(history.state);
window.history.pushState({data: 'test'}, '')
console.log(history.state);

setTimeout(() => {
    window.history.pushState({data: 'test'}, '', '/test')
    console.log(history.state);
}, 1000)

setTimeout(() => {
    window.history.pushState(1, '', '/second')
    console.log(history.state);
}, 2000)



setTimeout(() => {
    history.go('second');
    console.log(history.state);
}, 5000)

setTimeout(() => {
    history.back();
    console.log(history.state);
}, 5000)