const enum Direction {
    Up = 'Up',
    Down = 'Down',
}
function test(a: string) {
    console.log(`passed value is ${a}`);
}
test(Direction.Up || Direction.Down);
