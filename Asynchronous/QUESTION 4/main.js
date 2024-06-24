"use strict";
// QUESTION 4
// Write a function fetchWithError that returns a Promise. It should randomly either
//resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
//delay of 1 second. Handle the rejection using .catch
Object.defineProperty(exports, "__esModule", { value: true });
function fetchWithError() {
    return new Promise((resolve, reject) => {
        let rendom = Math.floor(Math.random() * 10 + 1);
        if (rendom <= 5) {
            setTimeout(() => {
                return resolve("Data fetched successfully!");
            }, 1000);
        }
        else {
            setTimeout(() => {
                return reject("Data fetch failed!");
            }, 1000);
        }
    });
}
fetchWithError()
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.log(error);
});
