const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += '<li> something new </li>';
    const li = document.createElement('li');
    li.textContent = 'somethine new to do';
    // ul.append(li);    //เพิ่มข้างล่าง
    ul.prepend(li);   //เพิ่มข้องบน

});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('even in LI');
//         e.stopPropagation();
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
   if(e.target.tagName ==='LI'){
       e.target.remove();
   }
});