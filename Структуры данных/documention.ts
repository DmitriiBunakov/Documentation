//!================================================================================================================================================
//? /Стэк/Stack/

//? Стэк организован по принципы LIFO(First in last out, последним пришел - первым вышел).

//? Можно добавлять элемент наверх стэка, удалять, читать верхний элемент, длину получать
/*
class Stack {
    #data = [];

    get count() {
        return this.#getLength;
    }

    get last() {
        if (!this.#getLength) {
            throw new Error('Empty stack');
        }

        return this._data.at(-1);
    }

    get #getLength() {
        return this.#data.length;
    }

    pop() {
        if (!this.#getLength) {
            throw new Error('Empty stack');
        }

        return this.#data.pop();
    }

    push(data) {
        return this.#data.push(data);
    }
}
*/





//!================================================================================================================================================
//? /Queue/Очередь/

//? Структура данных работает по принципу FIFO(First in first out).
/*
**
***
****
*****/
//? /Array/
// https://medium.com/@rodriguezlf4/static-vs-dynamic-arrays-javascript-beauty-f226e153cbc9


//? /Amortized/Аммортизация
// https://medium.com/@satorusasozaki/amortized-time-in-the-time-complexity-of-an-algorithm-6dd9a5d38045
//? Статический vs динамический массив
//? добавление элемента в статический массив быстрее, чем в динамический, тк размер известен заранее
//? добавлении в динамический массив при его заполнении происходит выделение памяти в 2 раза больше чем он сейчас уже заполнен, а также при этом происходит копирование всех значений в новый массив
/**
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
 */