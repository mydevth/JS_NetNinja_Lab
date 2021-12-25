//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//get elements by their class name
// const errors = document.getElementsByClassName('error');  //เป็น HTMLCollection 
// console.log(errors);      
// console.log(errors[0]);

// errors.forEach(errore => {          //เป็น HTMLCollection ใช้ forEach ไม่ได้
//     console.log(error);
// });


//get elements by their tag name
const paras = document.getElementsByTagName('p');    //HTMLCollection 
console.log(paras);
console.log(paras[1]);
