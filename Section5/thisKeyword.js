let user = {
    name: 'akkadate',
    age: 46,
    email: 'akkadate@gmail.com',
    location: 'chonburi',
    blogs: ['abc.com', 'xyz.com'],
    // login: function(){
        login(){                          // เป็น regular function เหมือนกัน จะให้ arrow function ไม่ได้
        console.log('the user logged in');
        },
    // logout: function(){
        login(){
        console.log('the user logged out');
        },
    // logBlogs: function() {
    logBlogs(){
        //console.log(this.blogs);
        console.log('this user hsa written the floowing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
     
    }
};

user.logBlogs();
console.log(this);