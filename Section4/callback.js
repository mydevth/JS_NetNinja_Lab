// const myFunc = (callbackFunc) => {
//     //do sumthing
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc (function (value) {
//     // do something
//     console.log(value);
// });

//ex2
let people =['kob', 'aye', 'phing', 'mon', 'nui'];

// people.forEach(function(person){       //ธรรมดา
// people.forEach((person, index) => {   //arrow
//     console.log(index,person);
// });

const logPerson =(person, index) =>{
    console.log(`${index} - Hello ${person}`);
}
people.forEach(logPerson);