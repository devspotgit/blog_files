
import { months } from "./api.js"



// template parts

function categoryHeader(title){
    return `
        <div class="category-header">
            <button class="side-open"><i class="fa-solid fa-bars"></i></button>
            <span class="category-title">${title}</span>
        </div>
    `
}


function postHeader(title, date){
    return `
        <div class="post-header">
            <button class="side-open"><i class="fa-solid fa-bars"></i></button>
            <span class="post-title">${title}</span>
            <span class="post-date">
                ${months[parseInt(date.split("-")[0])-1]+" "+date.split("-")[1]+", "+date.split("-")[2]}
            </span>
        </div>
    `
}


function footer(){
    return `
        <div class="footer">Devspot</div>    
    `
}



function postList(posts){
    return `
        <div class="post-list">
            ${
                posts.map(item => `
                    <div class="post-card">
                        <a href="/posts/${item.slug}" class="post-title">${item.title}</a>
                        <span class="post-date">
                            ${months[parseInt(item.date.split("-")[0])-1]+" "+item.date.split("-")[1]+", "+item.date.split("-")[2]}
                        </span>
                        <p class="post-preview">${item.preview}</p>  
                        <a href="/posts/${item.slug}" class="read-more">Read More</a>  
                    </div>
                `).join(" ")
            }
        </div>
    `
}


function postContent(content){
    return `
        <div class="post-content">${content}</div>
    `
}


function side(categories){
    return `
        <div class="side">
            <div class="side-top">
                <button class="side-close"><i class="fa-solid fa-xmark"></i></button>
                <a class="site-name" href="/">Desvspot</a>
            </div>
            <div class="categories">
                ${categories.map(item => `
                    <a href="/categories/${item.slug}" class="category">${item.title}</a>
                `).join(" ")}
            </div>
        </div>
    `
}






// full template pages

function postPage(post, content, categories){
    return`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/static/css/main.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>${post.title}</title>
        </head>
        <body>
            <div class="main">
                ${side(categories)}
                ${postHeader(post.title, post.date)}
                ${postContent(content)}
                ${footer()}
                <div class="transparent"></div>
            </div>
            <script src="/static/js/main.js"></script>
        </body>
        </html>
    `
}


function categoryPage(category, categories, posts){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/static/css/main.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>${category.title}</title>
        </head>
        <body>
            <div class="main">
                ${side(categories)}
                ${categoryHeader(category.title)}
                ${postList(posts)}
                ${footer()}
                <div class="transparent"></div>
            </div>
            <script src="/static/js/main.js"></script>
        </body>
        </html>
    `
}



function homePage(categories, posts){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/static/css/main.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>Home</title>
        </head>
        <body>
            <div class="main">
                ${side(categories)}
                ${categoryHeader("All Posts")}
                ${postList(posts)}
                ${footer()}
                <div class="transparent"></div>
            </div>
            <script src="/static/js/main.js"></script>
        </body>
        </html>
    `
}


export {homePage, categoryPage, postPage}



