"use strict";
const filterArray = (element) => {
    let result = element.filter((i) => typeof i === 'boolean');
    return result;
};
let arr = [213, 424523, 'song', true, false, 'rain', true, 2323, 42, 'lips', false];
filterArray(arr);
