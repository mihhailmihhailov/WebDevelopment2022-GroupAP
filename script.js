/* JQuery-based implementation
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
        .then((response) => response.json())
        .then(json => {
            let posts_div = document.createElement("div");
            posts_div.className = "posts";
            for (let post of json) {
                let article = document.createElement("article");
                article.className = "post";
                let post_header = document.createElement("div");
                post_header.className = "post-header";
                let name_avatar_div = document.createElement("div");
                name_avatar_div.className = "name-avatar-div";
                let post_lower_div = document.createElement("div");
                post_lower_div.className = "post-lower";

                let avatar = document.createElement("img");
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

                name_avatar_div.append(avatar)
                name_avatar_div.append(user)

                post_header.append(name_avatar_div)
                post_header.append(date)

                post_lower_div.append(image)
                post_lower_div.append(text)
                post_lower_div.append(button)

                article.append(post_header)
                article.append(post_lower_div)

                posts_div.append(article)
            }
            let content = document.getElementsByClassName("content")
            for (let content_div of content) {
                content_div.append(posts_div);
            }
        })
        .catch(err => {
            let posts_div = document.createElement("div");
            posts_div.className = "posts";
            let article = document.createElement("article");
            article.className = "post";
            let post_lower_div = document.createElement("div");
            post_lower_div.className = "post-lower";

            let text = document.createElement("p");
            text.textContent = "There are no posts to show at this time!"

            post_lower_div.append(text)
            article.append(post_lower_div)
            posts_div.append(article)

            let content = document.getElementsByClassName("content")
            for (let content_div of content) {
                content_div.append(posts_div);
            }
        })
}, false);

function showDropDownMenu() {
    document.getElementById("Dropdown").classList.toggle("show");
}
var button = document.getElementsByClassName("dropdown");
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