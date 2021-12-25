// const blogs = [
//     { title: 'why mac & chees rules', likes: 30 },
//     { title: '10 things to make with marite', likes: 50 }
// ];

// console.log(blogs);

let user = {
    name: 'akkadate',
    age: 46,
    email: 'akkadate@gmail.com',
    location: 'chonburi',
    blogs: [
        { title: 'why mac & chees rules', likes: 30 },
        { title: '10 things to make with marite', likes: 50 }
    ],
    // login: function(){
    login() {                          // เป็น regular function เหมือนกัน จะให้ arrow function ไม่ได้
        console.log('the user logged in');
    },
    // logout: function(){
    login() {
        console.log('the user logged out');
    },
    // logBlogs: function() {
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user hsa written the floowing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });

    }
};

 user.logBlogs();
// console.log(this);