
 let test = () => {
    console.log(this, test.name);
}

let obj = {
    method() {
        console.log(this, this.method.name);

        // function test() {
        //     console.log(this, test.name);
        // }

        test();
    }
}

obj.method();