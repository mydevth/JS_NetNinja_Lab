const para =document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Ninjas are awesome!';
// para.innerText += 'Ninjas are awesome!';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += '-New Text na krub';
// });


const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML +='<h2>THIS IS A NEW H2</h2>';

const people = ['kob','phing','aye'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});