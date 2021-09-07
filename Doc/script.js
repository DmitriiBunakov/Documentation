

document.body.addEventListener('click', (e) => {
    console.log('click body');
    console.log(e.eventPhase);
}, true)

inside.addEventListener('click', (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log(e.target);
    console.log(e.currentTarget);
});


inside.addEventListener('click', (e) => {
    console.log('второй обработчик, и сюда не должно дойти');
});