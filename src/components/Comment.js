import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbsDown, removeComment, addComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbsDown(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>removeComment</button>
    <button onClick={() => addComment(text)}>addComment</button>
  </li>;

export default Comment;
