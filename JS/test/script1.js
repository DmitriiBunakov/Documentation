const int = 1_000_000;

const dynamic = [];
const fixed = new Array(int);

console.time();
for (let index = 0; index < int; index++) {
    dynamic[index] = index;
}
console.timeEnd();

console.time('second');
for (let index = 0; index < int; index++) {
    fixed[index] = index;
}
console.timeEnd('second');


console.log(dynamic);
console.log(fixed);