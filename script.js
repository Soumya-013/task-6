function toggleAdminMode() {
    document.body.classList.toggle('admin-mode');
}

function addComment(event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var comment = document.getElementById('comment');
    var commentsList = document.getElementById('comments-list');
    var commentCount = document.getElementById('comment-count');

    if (!name.value.trim() || !email.value.trim() || !comment.value.trim()) {
        return;
    }

    // Create elements
    var commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    var headerDiv = document.createElement('div');
    headerDiv.className = 'comment-header';

    var authorSpan = document.createElement('span');
    authorSpan.className = 'comment-author';
    authorSpan.innerHTML = "<strong>" + name.value + "</strong>";

    var rightDiv = document.createElement('div');

    var dateSpan = document.createElement('span');
    dateSpan.className = 'comment-date';
    dateSpan.style.color = '#666';
    dateSpan.style.fontSize = '0.9rem';
    dateSpan.textContent = "Just now";

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        deleteComment(deleteBtn);
    };
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    rightDiv.appendChild(dateSpan);
    rightDiv.appendChild(deleteBtn);

    headerDiv.appendChild(authorSpan);
    headerDiv.appendChild(rightDiv);

    var commentP = document.createElement('p');
    commentP.style.color = "#555";
    commentP.style.marginTop = "0.5rem";
    commentP.textContent = comment.value;

    // Assemble
    commentDiv.appendChild(headerDiv);
    commentDiv.appendChild(commentP);

    commentsList.insertBefore(commentDiv, commentsList.firstChild);

    // Reset form
    name.value = '';
    email.value = '';
    comment.value = '';

    // Update comment count
    updateCommentCount();
}

function deleteComment(btn) {
    var commentDiv = btn.closest('.comment');
    if (commentDiv) {
        commentDiv.remove();
        updateCommentCount();
    }
}

function updateCommentCount() {
    var count = document.querySelectorAll('#comments-list .comment').length;
    document.getElementById('comment-count').textContent = count;
}
