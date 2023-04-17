import {useState} from "react";
import CommentList from "../CommentList";

function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  }

  const handleContent = (event) => {
    setContent(event.target.value);
  }
    function handleChange(event) {
      const {name, value} = event.target;
      if (name === "author") {
        handleAuthor(value);
      } else {
        handleContent(value);
      }
    }


  return (
    <form onSubmit={props.onSubmit}>
      <label>Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={props.authorTest}
        onChange={props.onAuthorChange}
        />
        <label>Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={props.contentTest}
          onChange={props.onContentChange}
          />
          <button type="submit">Submit</button>
          </form>
          );
}

export default CommentForm;
