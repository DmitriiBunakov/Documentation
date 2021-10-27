debugger
function a() {
    var name = 'John Doe';

    function b() {
        return name;
    }
    return b;
}
var c = a();

function bla() {
    console.log(1);
}
bla();
console.log(c());