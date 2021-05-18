function add(a: number, b: number): number {
    return a + b
}
// console.log(add(12, 12))


interface Position {
    x: number | undefined
    y: number | undefined
}
interface PositionWithDefault extends Position {
    default: number
}
function position(): Position
function position(a: number, b: number): Position
function position(a?: number, b?: number) {
    if (a && !b) {
        return { x: a, y: undefined, default: a }
    }
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }
    return { x: a, y: b, }
}
console.log(position())
console.log(position(12, 24))






/*что, если надо сравнить 2 массива которые составлены из разных типов, для этого при вызове можно указать или такой
массив типов или другой */
let arr11 = [1, 2]
let arr22 = ['í', 'am', 'god']
let longestArray = function <Type extends { length: number }>(a: Type, b: Type) {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}
// console.log(longestArray<number[] | string[]>(arr11, arr22))
// console.log(longestArray<number[] | string>(arr11, 'Привет, как дела у тебя, парень?'))





function foreach<T>(arr: T[], callback: (arg1: T, arg2?: number, arg3?: T[]) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}
let arr = [1, 2, 3, 4, 5]
foreach(arr, (item, i, arr) => {
    // console.log(item)
    // console.log(i)
    // console.log(arr)
})





function withDestructure({ a, b, c }: { a: number, b: number, c: number }) {
    console.log(a + b + c)
}
let obj12 = { a: 1, b: 2, c: 3 }
withDestructure(obj12)





function withDestructure1(props: { a: number, b: number, c: number }) {
    let { a, b, c } = props
    console.log(a)
    console.log(b)
    console.log(c)
}
let obj122 = { a: 1, b: 2, c: 3 }
withDestructure1(obj122)





function readonlyArray1Fn<T>(arr: ReadonlyArray<T>) {
    // arr.pop()
}
function readonlyArray2Fn<T>(arr: readonly T[]) {
    // arr.pop()
}