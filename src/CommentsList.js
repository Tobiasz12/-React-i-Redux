import React from 'react';
import Comment from './CommentContainer';
import comments from './comments'

const CommentsList = ({comments}) =>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>

export default CommentsList;
