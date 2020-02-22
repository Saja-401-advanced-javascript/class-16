'use strict ';


const event = require('./events.js')



//create an event to listen to smth
// on some events do smth
// this function takes 2 parameters :
//1- event name
//2- call back function that take a parameter(payload)
// payload can be anything => string, opbject ,....


event.on('fail', payload => {
    log('fail', payload)
})

 event.on('success', payload =>{
    log('success', payload)
 })

 

 
function log(eventName, payload){
    const date = new Date();
    let meesage= `${eventName.toUpperCase()}`
    console.log({meesage, date, payload});//object literal
    
}