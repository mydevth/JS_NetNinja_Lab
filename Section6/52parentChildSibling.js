const article = document.querySelector('article');

// console.log(article.children);           //เป็น HTMLCollection ใช้ forEach ไม่ได้ จึงต้องแปลงเป็น array ก่อน
// console.log(Array.from(article.children))   //array
// console.log(article.children);

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

const title=document.querySelector('h2');
console.log(title.parentElement);    //find the parent of h2

console.log(title.parentElement.parentElement); 
console.log(title.nextElementSibling);   //next h2
console.log(title.previousElementSibling); 

//chaining
console.log(title.nextElementSibling.parentElement.children);