import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './CommentBox/CommentBox';
import * as serviceWorker from './serviceWorker';

var data = [
    {id:1,author:"First",text:"This is First"},
    {id:2,author:"Second",text:"This is Second"},
    {id:3,author:"Third",text:"This is Third"},
    {id:4,author:"Fourth",text:"This is Fourth"}
  ];

ReactDOM.render(<CommentBox data = {data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
