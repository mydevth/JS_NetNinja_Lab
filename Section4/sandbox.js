//callback in


const ul = document.querySelector('.people');

const people = ['kob', 'aye', 'phing', 'mom', 'nui','dee'];

let html = ``;
// people.forEach(function(person) {
//     //create html template
//     html += `<li style="color: purple"> ${person}</li>`;
// });

people.forEach(person => {      //Arrow function
    //create html template
    html += `<li style="color: purple"> ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;