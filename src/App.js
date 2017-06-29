import React from 'react';
import './App.css';
import Comment from './Comment'
import CommentsList from './CommentsList'
import connect from './CommentsListContainer';
const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzyy
      <CommentsList/>
    </div>
  );
};

export default App;
