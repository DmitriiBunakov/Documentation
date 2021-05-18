"use strict";
// 
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed();
    }
    return x.trim();
}
// 
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error message';
    }
}
function hanbler(response) {
    if (response instanceof MyResponse) {
        return {
            info: response.header + '/' + response.result
        };
    }
    return {
        info: response.header + '/' + response.message
    };
}
console.log(hanbler(new MyResponse()));
console.log(hanbler(new MyError()));
function setAlertType(type) { return type; }
setAlertType('success');
setAlertType('danger');
// setAlertType('warninавыаg')
