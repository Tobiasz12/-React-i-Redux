import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from '../DevTools'
const App = () => {
  return (
    <div className="App">
     lista komentarzy
     <CommentsListContainer />
     <DevTools />
    </div>
  );
};

export default App;
