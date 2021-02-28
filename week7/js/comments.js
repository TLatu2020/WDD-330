class CommentModel {
    constructor(type) {
        this.type = type;

        this.comments = readStorage(this.type) || [];
    }

    getComments(q = null) {
        if (q === null) {
            return this.comments;
        } else {
            return this.comments.filter(el => el.name === q);
        }
    }

    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };

        this.comments.push(newComment);
        writeStorage(this.type, this.comments);
    }
}

function writeStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

const commentDisplay = `<div class="addComment">
                            <h2>Add a comment</h2>
                            <input type="text" id="commentEntry" />
                            <button id="submitBtn">Comment</button>
                            </div>
                            <h2>Comments</h2>
                            <ul class="comments"></ul>
                            `;

function renderCommentList(element, comments) {
    element.innerHTML = '';

    console.log(comments);

    comments.forEach(el => {

        let item = document.createElement('li');

        item.innerHTML = `${el.name}: ${el.comment}`;

        element.appendChild(item);
    });
}


class Comments {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentModel(this.type);
    }

    addSubmitListener(postName) {

        document.getElementById('submitBtn').onclick = () => {

            this.model.addComment(
                postName,
                document.getElementById('commentEntry').value

            );

            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
        };
    }

    showCommentList(q = null) {
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');

            if (parent.innerHTML === '') {
                parent.innerHTML = commentDisplay;
            }
            if (q !== null) {
                document.querySelector('.addComment').style.display = 'block';
                this.addSubmitListener(q);
            } else {
                document.querySelector('.addComment').style.display = 'none';
            }
            let comments = this.model.getComments(q);
            if (comments === null) {
                comments = [];
            }
            renderCommentList(parent.lastChild, comments);
            // console.log(parent.lastChild);
        } catch (error) {
            console.log(error);
        }
    }
}

export default Comments;