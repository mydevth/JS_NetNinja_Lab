// primitive value

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


// reference values

const userOne = { name: 'akkadate', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// userOne.name='phing';
userTwo.age = 60;
console.log(userOne, userTwo);
