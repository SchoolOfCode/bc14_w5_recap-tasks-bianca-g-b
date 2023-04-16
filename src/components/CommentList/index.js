import { useState } from "react";
import "./index.css";

// set values from comment form to be updated in comment list

function CommentList(comments) {
  // Create a comments list
  comments = [
    {
      id: "C_eSSKbq2lWfs-TaylQI2",
      author: "Earl Grand",
      content: "Hello World"
    },
    {
      id: "hXo9MDNljcMQSkDiWMAZA",
      author: "Robot GPT",
      content: "Thank you for your comment"
    }];

  const [commentsArray, setCommentsArray] = useState('comments');
  // Declare function to set comments object to have a id, author, and content
  
  // function addComment(newComment) {
  //   setCommentsArray([...commentsArray, newComment]);
  // }

  function initials(str) { 
    let arr = str.split(" ");
    return (
    arr.map((name) => name[0].toUpperCase()).join("")
  )};
   
  
  return (
    // return list of comments
      <ul>
        {comments.map((comment) => (
          <div className="comment">
          <li key={comment.id}>  
          <div className="authorArea">
            <h2 className="initials">{initials(comment.author)}</h2>
            <h2 className="authorName">{comment.author}</h2>
          </div>
            <p className="postText">{comment.content}</p>
          </li>
          </div>
        ))}
      </ul> 
   );
}

export default CommentList;

