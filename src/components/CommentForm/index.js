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
  return (
    <form >
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={props.authorTest}
        onChange={props.onChange}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={props.contentTest}
          onChange={props.onChange}
          />
          <button type="submit" onSubmit={props.handleContent}>Submit</button>
          </form>
          );
}

export default CommentForm;
