import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1> 
          <CommentList data= {this.props.data}/>
          <CommentForm/>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    /* return (
      <div className="commentList">
        <Comment author="First">This is First Comment</Comment>
        <Comment author="Second">This is Second Comment</Comment>
      </div>
    ); */
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}							
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

export default CommentBox;
