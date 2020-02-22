'use strict ';

const fs = require('fs');
const util = require('util');

let events = require('../modular/events.js');
require('../modular/logger.js');
require('../modular/app.js');

let writeFilepromisify = util.promisify(fs.writeFile);
let readFilepromisify = util.promisify(fs.readFile);

const writeFile = (file, data) => {
  data = data.toUpperCase();
  console.log('data in write function : ', data);
  writeFilepromisify(file, data);
  return data;
};

describe(' File System Testing ' , () =>{

  let file = `${__dirname}/../files/index.text`;

  it(' Read , Write File ' , () =>{
    readFilepromisify(file)
      .then( data => {
        console.log('data in test : ', data);
        expect(data).toBeDefined();
        console.log('data.toString() : ', data.toString());
        expect(data.toString()).toEqual('hi there');
        return data.toString();
      })
      .then(data => {
        writeFile(file, data);
        console.log('write file in tests',writeFile(file, data));
        expect(data).toEqual('HI THERE');
      })
      .then(data => {
        expect(events.emit('success' , data)).toBeTruthy();
      })
      .then(error => {
        events.emit('error',error);
      });
  });

}); 