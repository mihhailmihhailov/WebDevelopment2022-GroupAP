/* JQuery-based implementation (for preservation purposes)
$(function() {
    // Online endpoint
    //$.get("https://api.npoint.io/ec93f3aee9868177ca5d", function(posts) {
    $.get("Data/posts.json", function(posts) {
        let postsdiv = $('<div class="posts">');
        for (post of posts){
            let article = $('<article class="post">');

            let postheader = $('<div class="post-header">');
            let name_avatar_div = $('<div class="name-avatar-div">');
            let post_lower_div = $('<div class="post-lower">');

            let avatar = $('<img class="avatar" alt="avatar">').attr('src', post.avatar);
            let img = $('<img class="post" alt="post image">').attr('src', post.img);
            let date = $('<p>').text(post.date_time);
            let user = $('<p>').text(post.user);
            let text = $('<p>').text(post.text);
            let button = $('<button type="button" class="like">').text("👍 Like!");

            name_avatar_div.append(avatar)
            name_avatar_div.append(user)

            postheader.append(name_avatar_div)
            postheader.append(date)


            post_lower_div.append(img)
            post_lower_div.append(text)
            post_lower_div.append(button)

            article.append(postheader)
            article.append(post_lower_div)
            
            postsdiv.append(article)
        }
        $(postsdiv).appendTo('.content')
    })
    
});

 */

document.addEventListener('DOMContentLoaded', function() {
    // Online endpoint
    //fetch("https://api.npoint.io/ec93f3aee9868177ca5d")
    fetch("Data/posts.json")
        .then((response) => response.json()) //Fetching the data from our posts.json file
        .then(json => {
            let posts_div = document.createElement("div");  //Creating the posts div element where we will store our posts
            posts_div.className = "posts";
            for (let post of json) {    //Iterating through every post in the json file 
                let article = document.createElement("article");    //Creating article element where we will store our core post div elements (1 article is 1 post)
                article.className = "post";
                let post_header = document.createElement("div");    //Creating all core post div elements (lines 55-60)
                post_header.className = "post-header";
                let name_avatar_div = document.createElement("div");
                name_avatar_div.className = "name-avatar-div";
                let post_lower_div = document.createElement("div");
                post_lower_div.className = "post-lower";

                let avatar = document.createElement("img"); //Creating all elements that will contain text and images for our post. These values we get from the json file objects (lines 62-84)
                avatar.className = "avatar";
                avatar.alt = "avatar";
                avatar.src = post.avatar;

                let image = document.createElement("img");
                image.className = "post";
                image.alt = "post image";
                image.src = post.img;

                let date = document.createElement("p");
                date.textContent = post.date_time;

                let user = document.createElement("p");
                user.textContent = post.user;

                let text = document.createElement("p");
                text.textContent = post.text;

                let button = document.createElement("button");
                button.type = "button";
                button.className = "like";
                button.textContent = "👍 Like!";

                name_avatar_div.append(avatar); //Putting all text and image elements together to our core post divs (86-94)
                name_avatar_div.append(user);

                post_header.append(name_avatar_div);
                post_header.append(date);

                post_lower_div.append(image);
                post_lower_div.append(text);
                post_lower_div.append(button);

                article.append(post_header);     //Putting all core post divs into a single post article
                article.append(post_lower_div);

                posts_div.append(article);       //Every created article is stored in the posts div element
            }
            let content = document.getElementsByClassName("content")
            for (let content_div of content) {
                content_div.append(posts_div);      //Searching the posts content div from the index.html file and appending the posts to it. (Posts are now visible)
            }
        })
        .catch(err => {     //If json file does not exist or other errors occur then user will see 1 post with an error message.
            let posts_div = document.createElement("div");
            posts_div.className = "posts";
            let article = document.createElement("article");
            article.className = "post";
            let post_lower_div = document.createElement("div");
            post_lower_div.className = "post-lower";

            let text = document.createElement("p");
            text.textContent = "There are no posts to show at this time! Reason: " + err;

            post_lower_div.append(text);
            article.append(post_lower_div);
            posts_div.append(article);

            let content = document.getElementsByClassName("content")
            for (let content_div of content) {
                content_div.append(posts_div);
            }
        })
}, false);

function showDropDownMenu() {
    document.getElementById("Dropdown").classList.toggle("show");
}

let button = document.getElementsByClassName("dropdown");
button.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function hover(element) {
    element.setAttribute('src', 'Images/user_hover.png');
}

function unhover(element) {
    element.setAttribute('src', 'Images/user.png');
}