import React from 'react';
import './App.css';
import Comment from './Comment';
import CommentsList from './CommentsList';
import connect from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
     lista komentarzy
     <CommentsList />
    </div>
  );
};

export default App;
