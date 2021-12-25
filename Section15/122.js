class User {
    constructor(username,email){
        this.username=username;
        this.email= email;
        this.score=0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;        
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
constructor(username,email,title){
    super(username,email);
    this.title=title;
}
    deleteUser(user){
        users=users.filter(u=> u.username !== user.username);
    }
}

const userOne = new User('akkadate', 'akkadate@gmail.com');
const userTwo = new User('phing','pim@gmail.com');

const userThree = new Admin('aye','aye@gmail.com','black-belt-ninja');


console.log(userThree);
 console.log(userOne, userTwo,userThree);

// let users = [userOne,userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users)

// userOne.deleteUser(userThree);

// // userOne.login().incScore().incScore().logout();







