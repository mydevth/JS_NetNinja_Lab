const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://www.chonburi.biz');
link.innerText = "Chonburi Biz Website";

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green;');




