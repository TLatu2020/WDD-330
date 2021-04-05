function writeStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}



class Comments {
    constructor() {
        this.type = "city"

        //  const commentElementId = document.getElementById('comments');
        this.comments = this.readStorage(this.type) || [];

        console.log(this.comments);

    }


    readStorage() {
        return JSON.parse(window.localStorage.getItem(this.type));
    }

    getComments() {
        return this.comments;
    }


    addComment(content) {
        const newComment = {
            name: this.type,
            comment: content,
            date: new Date()
        };

        console.log(this.type);

        this.comments.push(newComment);
        writeStorage(this.type, this.comments);

        console.log(content)
    }

}

export default Comments;