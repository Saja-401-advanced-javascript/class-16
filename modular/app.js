'use strict ';
const event = require('./events.js')
const util = require('util');
const fs = require('fs');
require('./logger.js');

let file = `${__dirname}/./files/data.text`;


let readFilepromisify = util.promisify(fs.readFile);


readFilepromisify(file)
.then (data => {
    return data.toString();
})
.then (data => {
    writeFile(file, data);
})
.then(data => {
    event.emit('success', data);;
})
.catch(error => {
    event.emit('fail', error);
})
// console.log(readFilepromisify);


let writeFilePromisify = util.promisify(fs.writeFile);
const writeFile = (file, data) => {
    data = data.toUpperCase();
    writeFilePromisify(file,data);
    return data;
}