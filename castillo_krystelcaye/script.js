let nameInput = document.getElementById("name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");
let commentsSection = document.querySelector(".group-comment");
   
nameInput.addEventListener("input", toggleCommentButton);
commentInput.addEventListener("input", toggleCommentButton);

function toggleCommentButton() {
    let nameValue = nameInput.value;
    let commentValue = commentInput.value;

    if (nameValue !== "" && commentValue !== "") {
            commentButton.removeAttribute("disabled");
    } else {
            commentButton.setAttribute("disabled", "disabled");
    }
}

function addComment(event) {
    event.preventDefault();

    let name = nameInput.value;
    let comment = commentInput.value;
    
    if (name.trim() === '' || comment.trim() === '') {
            return;
    }
    
    let commentElement = document.createElement('div');
    commentElement.innerHTML = `<p class="input">- <em>${name}: 
    ${comment}</em></p>`;
    commentsSection.appendChild(commentElement);
    
    nameInput.value = '';
    commentInput.value = '';
    commentButton.setAttribute('disabled', 'true');
}