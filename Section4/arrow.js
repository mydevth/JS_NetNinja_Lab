//regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
//     };

//arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// };
// const calcArea = radius => 3.14 * radius**2;   //แบบย่อ

// const area = calcArea(5);
// console.log('area is :', area);

//practise arror fuctions
// const greet = function () {           //รูปแบบ1
//     return ' hello , world';
// };

// const greet = () => 'hello, world';          //รูปแบบ2
// const result = greet();
// console.log(result);

// const bill = function (products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

const bill = (products, tax) => {
    let total=0;
    for(let i =0; i< products.length; i++){
        total +=products[i] + products[i] * tax;
    }
    return total;

};

console.log(bill([10, 15, 30], 0.2));