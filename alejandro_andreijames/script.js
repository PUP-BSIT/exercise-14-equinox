let userName = document.querySelector("#name");
let userComment = document.querySelector("#comment");
let commentButton = document.querySelector("#comment_button");
let commentsSection = document.querySelector("#comments_section");
let commentsSectionSort = document.querySelector(".team-comment-sorted");
let ascendingButton = document.querySelector("#ascending-button");
let descendingButton = document.querySelector("#descending-button");
let comments = [];

userName.addEventListener("input", buttonActivate);
userComment.addEventListener("input", buttonActivate);
ascendingButton.addEventListener("click", sortCommentsAscending);
descendingButton.addEventListener("click", sortCommentsDescending);

function buttonActivate() {
    let nameContent = userName.value;
    let commentContent = userComment.value;

    commentButton.disabled = !(nameContent.trim() && commentContent.trim());
}

function addComment() {
    let name = userName.value;
    let comment = userComment.value;

    if (name.trim() === '' || comment.trim() === '') {
        return;
    }

    let timestamp = new Date().toLocaleString();

    let commentObj = {
        name: name,
        comment: comment,
        timestamp: timestamp,
    };

    comments.push(commentObj); 

    userName.value = '';
    userComment.value = '';
    commentButton.setAttribute('disabled', 'true');

    displayComments();
}

function displayComments() {

    commentsSectionSort.innerHTML = '';

    for (let comment of comments) {
        let commentElement = document.createElement('div');
        commentElement.innerHTML = `<h4>${comment.name} - ${comment.timestamp}
        </h4><p>${comment.comment}</p>`;
        commentsSectionSort.appendChild(commentElement);
    }
}

function sortCommentsAscending() {
    comments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    displayComments();
}

function sortCommentsDescending() {
    comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    displayComments();
}