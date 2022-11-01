
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

function showDropDownMenu() {
    document.getElementById("Dropdown").classList.toggle("show");
}
var button = document.getElementsByClassName("dropdown");
button.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
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