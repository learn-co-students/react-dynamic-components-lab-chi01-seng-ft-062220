//import React, { Component } from 'react' at the top of our file
import React, { Component } from 'react';

class Comment extends Component {//Use the class X extends Component {} syntax
  render () {

    //It should have a single <div> in its render() method
    //The <div> should have a className="comment" attribute
    return <div className = "comment">
     {/* It should expect a single prop (the text of a comment), which can be used in the component via: this.props.commentText. 
     This prop is passed in src/BlogPost.js */}

      {this.props.commentText}</div>
      // Don't forget - we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}
  }
}

export default Comment 
//export the class so it can be used in other files
