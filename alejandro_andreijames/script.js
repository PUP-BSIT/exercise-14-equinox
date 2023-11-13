let userName = document.getElementById("name");
let userComment = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");
let commentsSection = document.getElementById("comments_section");

userName.addEventListener("input", buttonActivate);
userComment.addEventListener("input", buttonActivate);

function buttonActivate() {
    let nameContentValue = userName.value;
    let commentContentValue = userComment.value;

    if (nameContentValue !== "" && commentContentValue !== "") {
        commentButton.removeAttribute("disabled");
    } else {
        commentButton.setAttribute("disabled", "true");
    }
}

function addComment() {
    let name = userName.value;
    let comment = userComment.value;

    if (name.trim() === '' || comment.trim() === '') {
        return;
    }

    let commentElement = document.createElement('li');
    commentElement.innerHTML = `<strong><em>${name}${comment}</em></strong>`;
    commentsSection.appendChild(commentElement);

    userName.value = '';
    userComment.value = '';
    commentButton.setAttribute('disabled', 'true');
}
