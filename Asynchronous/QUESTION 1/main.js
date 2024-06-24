"use strict";
// QUESTION 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
//greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
let fetchGreeting = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("rendom message");
        }, 2000);
    });
};
fetchGreeting().then((response) => {
    console.log(response);
});
