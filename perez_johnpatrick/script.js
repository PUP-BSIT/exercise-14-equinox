let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment-button");
let commentsSection = document.getElementById("comment_form");

nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", toggleCommentButton);
commentButton.addEventListener("click", addComment);

function toggleCommentButton() {
    let nameValue = nameInput.value;
    let commentValue = commentInput.value;

    if (nameValue.trim() !== "" && commentValue.trim() !== "") {
        commentButton.removeAttribute("disabled");
    } else {
        commentButton.setAttribute("disabled", "disabled");
    }
}

function addComment() {
    let name = nameInput.value;
    let comment = commentInput.value;

    if (name.trim() === "" || comment.trim() === "") {
        return;
    }

    let commentElement = document.createElement('div');
    commentElement.innerHTML = `<p>${name}${comment}</p>`;
    commentsSection.appendChild(commentElement);

    nameInput.value = '';
    commentInput.value = '';
    commentButton.setAttribute('disabled', 'true');
}
