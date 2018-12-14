import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox/CommentBox';

var data = [
    {id:1,author:"First",text:"This is First"},
    {id:2,author:"Second",text:"This is Second"},
    {id:3,author:"Third",text:"This is Third"},
    {id:4,author:"Fourth",text:"This is Fourth"}
  ];

ReactDOM.render(<CommentBox data = {data}/>, document.getElementById('root'));
