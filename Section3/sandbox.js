let age = 30;

//age = 50;

if (true) {
    let age = 40;
    let name = 'akkadate';
    console.log('instde 1st code block: ', age, name);

    if (true) {
    let age = 50;
        console.log('instde 2nd code block', age)
        var test = 'hello';
    }
}

console.log('outside code block: ', age, name, test);