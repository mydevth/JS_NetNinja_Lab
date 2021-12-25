function User(username,email){
    this.username=username;
    this.email=email;
}

User.prototype.login=function(){
        console.log(`${this.username} has logged in`);
        return this;
}

User.prototype.logout=function(){
    console.log(`${this.username} has logged out`);
    return this;
}

User.prototype.incnum=function(num){
    num += 1;
    console.log(`The number is : ${num}`);
    return this;
}

const userOne = new User('akkadate','akkadate@gmail.com');
const userTwo = new User('phing','phing@gmail.com');

console.log(userOne,userTwo);
userOne.login().logout();

userOne.incnum(5);
