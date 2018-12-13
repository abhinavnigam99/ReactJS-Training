import React, { Component } from 'react';
//import './App.css';

var data = [
  {id:1,author:"First",text:"This is First"},
  {id:2,author:"Second",text:"This is Second"},
  {id:3,author:"Third",text:"This is Third"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Comments</h1> 
          <CommentList data= {data}/>
          <CommentForm/>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        <Comment author="First">This is First Comment</Comment>
        <Comment author="Second">This is Second Comment</Comment>
      </div>
    );
  }
}

class CommentForm extends Component {
  render() {
    return (
      <div className="commentForm">
        Hello World, I am a comment Form
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <h4>
          {this.props.children}
        </h4>        
      </div>
    );
  }
}

export default App;
