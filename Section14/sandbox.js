const todos =[
    {text: 'play mariokart', author: 'kob'},
    {text: ' buy some milk', author: 'phing'},
    {text: ' buy some bread', author: 'aye'}
];

console.log(todos);
// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(stored);

console.log(JSON.parse(stored));

