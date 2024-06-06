
const p = new URLSearchParams({
    space: 'Bunakov Dima',
    plus: 'karp+masha%20test%2B'
});

console.log(p.toString());

console.log(encodeURI('Bunakov Dima' + 'karp+masha'));
console.log(encodeURIComponent('Bunakov Dima' + 'karp+masha'));