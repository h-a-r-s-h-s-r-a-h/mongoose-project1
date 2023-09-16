import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import Login from "./model/login.js";

mongoose.connect("mongodb+srv://<user_name>:<cluster_name>@<password>.2uxfgjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

var myTitle = 'Awesome Post!';

//Create a new blog post object
//First method

// const article = new Blog({
//     _id: 1,
//     title: myTitle,
//     slug: 'awesome post slug',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
// })

// Insert a the article in your own mongoDB database

// await article.save();

//First method code ends

const article = await Blog.create({
    title: myTitle,
    slug: 'awesome post slug',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
})

// overwriting the title of article
article.title = "The most";
await article.save();



console.log(article);

const myLogin = await Login.create({
    username: "harsh",
    password: "Harsh",
})


console.log(myLogin);
