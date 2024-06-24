"use strict";
// QUESTION 5
// Write a function executeSequentially that executes two functions fetchData and
//processData sequentially using Promises, and logs the results in the order they are
//called.
function executeSequentially() {
    let fetchData = () => {
        return new Promise((res, rej) => {
            return res("fetch data successfuly");
        });
    };
    let processData = () => {
        return new Promise((res, rej) => {
            return rej("Process data failed");
        });
    };
    fetchData()
        .then((results) => {
        console.log(results);
    });
    processData()
        .catch((results) => {
        console.log(results);
    });
}
;
executeSequentially();
