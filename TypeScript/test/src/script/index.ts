class Test {

    constructor() {
        this.init();
    }

    init() {
        console.log('init');

        this.functionReturnReject()
            .catch(() => {
                console.log('catch');
                throw new Error();
            })
            .then(data => {
                console.log(data);

                // this.functionAwaitPromise();
            })
            .catch(() => {
                console.log('LAST CATCH');
            });
    }

    functionReturnReject(): Promise<string> {
        return new Promise((resolve, reject) => {
            console.log('create functionReturnReject');

            setTimeout(() => {
                console.log('reject functionReturnReject');

                reject('functionReturnReject');
            });
        });
    }

    async functionAwaitPromise(): Promise<void> {
        await new Promise(resolve => {
            console.log('create functionAwaitPromise');

            setTimeout(() => {
                console.log('resolve functionAwaitPromise');

                resolve('functionAwaitPromise');
            }, 2000);
        });
    }
}
new Test();
