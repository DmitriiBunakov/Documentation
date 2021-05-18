// 
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed()
    }
    return x.trim()
}


// 
class MyResponse {
    header = 'response header'
    result = 'response result'
}
class MyError {
    header = 'error header'
    message = 'error message'
}
function hanbler(response: MyResponse | MyError) {
    if (response instanceof MyResponse) {
        return {
            info: response.header + '/' + response.result
        }
    }
    return {
        info: response.header + '/' + response.message
    }
}
console.log(hanbler(new MyResponse()))
console.log(hanbler(new MyError()))


// нельзя передавать невалидные значения     setAlertType('привет')
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) { return type }
setAlertType('success')
setAlertType('danger')
// setAlertType('warninавыаg')