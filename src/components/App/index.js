import BlogPost from "../BlogPost";
import Comment from "../Comment";
import "./index.css";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { useState } from "react";


function App() {
  
  function initials(str) { 
    let arr = str.split(" ");
    return (
    arr.map((name) => name[0].toUpperCase()).join("")
  )};
  // write onSubmit function to take in author, content and id and add the new object to the comments array
  // set comments array to be updated with new comment
  const [author, setAuthor] = useState("Robot GPT");
  const [content, setContent] = useState("");
  const [commentsArray, setCommentsArray] = useState([{
    id: "C_eSSKbq2lWfs-TaylQI2",
    author: "Earl Grand",
    content: "Hello World"
  },
  {
    id: "hXo9MDNljcMQSkDiWMAZA",
    author: "Robot GPT",
    content: "Thank you for your comment"
  }]);
  
  function handleAuthor(event) {
    setAuthor(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      // get random id 
      id: Math.floor(Math.random() * 100000000),
      author: author,
      content: content
    }
    // add new comment to comments array
    setCommentsArray([...commentsArray, newComment]);
    setContent("");
  }
console.log(commentsArray);


  return (
    <div className="App">
    <BlogPost 
    />
    <Comment 
      id="C_eSSKbq2lWfs-TaylQI2"
      author="Chat GPT"
      content="Great post!"
    />
    <CommentForm 
    onSubmit={handleSubmit}
    onAuthorChange={handleAuthor}
    onContentChange={handleContent}
    authorTest={author}
    contentTest={content}
    />
    {console.log(commentsArray)}
    {commentsArray.map((comment) => {
      return (
        
    <CommentList 
      key= {comment.id}
      id= {comment.id}
      text={comment.content}
      author= {comment.author}
      content= {comment.content}
      initials= {initials(comment.author)}
    />
    )})}

  </div>
  )
}

export default App;
