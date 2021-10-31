class Subscriber {
    _subscribers = {};

    constructor(initValue) {
        this._value = initValue;
    }

    emit(value) {
        this._value = value;
        for(const key of Object.getOwnPropertySymbols(this._subscribers)) {
            this._subscribers[key](this._value);
        }
    }

    subscribe(callback) {
        const symbol = Symbol();
        this._subscribers[symbol] = callback;
        this._subscribers[symbol](this._value);

        const _this = this;
        let subscribeObject = {
            unsubscribe() {
                _this.#unsubscribe(symbol);
                subscribeObject = null;
            },
        };
        return subscribeObject;
    }

    #unsubscribe(functionId) {
        delete this._subscribers[functionId];
    }
}

let example = new Subscriber(1);

let first$ = example.subscribe((value) => {
        console.log('first', value);
    });

example.subscribe((value) => {
        console.log('second', value);
    }).unsubscribe();

example.emit(2);
first$.unsubscribe();
example.emit(3);
example.emit(4);
example.emit(5);
example.emit(6);


