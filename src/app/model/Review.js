import {User} from "./User";

export class Review {
    constructor(id, user: User, title, content, imageContent, numLike, numComment, dateTime) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.content = content;
        this.imageContent = imageContent;
        this.numLike = numLike;
        this.numComment = numComment;
        this.dateTime = dateTime;
    }
}