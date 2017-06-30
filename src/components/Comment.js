import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbsDown, removeComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbsDown(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>removeComment</button>
  </li>;

export default Comment;
