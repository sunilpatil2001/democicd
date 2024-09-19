const cds = require('@sap/cds');
// const add = require('./util/add')
module.exports = cds.service.impl(function (req) {
    const { Books } = cds.entities('my.bookshop')
    this.before('READ', 'Books', (req) => {
        function asynchronous_operational_method() {
            let first_promise = new Promise((resolve, reject) => resolve("Hello"));
            let second_promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(" GeeksforGeeks..");
                }, 5000);
            });
            let combined_promise = Promise.all([first_promise, second_promise]);
            return combined_promise;
        }

        async function display() {
            let data = await asynchronous_operational_method();
            console.log(data);
        }
        display();
        return null
    });
    this.on('CREATE', Books, (req) => {
    })
})