let obj = {
    func1: () => {
        console.log(this);
    }
}
obj.func1();

class A{
    func1 = () => {
        console.log(this);
    }
}
new A().func1();