// import { useState } from "react";
import "./index.css";


function CommentList(props) {
  
  return (
    // return list of comments
      <ul>
  
          <div className="comment">
          <li key={props.id}>  
          <div className="authorArea">
            <h2 className="initials">{props.initials}</h2>
            <h2 className="authorName">{props.author}</h2>
          </div>
            <p className="postText">{props.content}</p>
          </li>
          </div>
      </ul> 
   );
}

export default CommentList;

