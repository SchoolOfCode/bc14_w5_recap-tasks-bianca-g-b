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
  const [content, setContent] = useState("Thank you for your comment");
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

  function handleSubmit() {
    const newComment = {
      // get random id 
      id: Math.floor(Math.random() * 100000000),
      author: author,
      content: content
    }
    // add new comment to comments array
    console.log(newComment)
    setCommentsArray([...commentsArray, newComment]);
    
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
    <CommentList 
      comments={commentsArray}
      id= {Math.floor(Math.random() * 100000000)}
      text={content}
      author= {author}
      content= {content}
      function= {initials}
    />
    <CommentForm 
    authorTest={commentsArray.author}
    contentTest={commentsArray.content}
    handleContent={handleSubmit}/>

  </div>
  )
}

export default App;
