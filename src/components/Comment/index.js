import "./index.css";

function Comment(props) {
  let arrAuthor = props.author.split(" ");
  const initials = arrAuthor.map((name) => name[0].toUpperCase()).join("");
  return (
    <div className="comment">
    <div className="authorArea">
      <h2 className= "initials">{initials}</h2>
      <h2 className="authorName">{props.author}</h2>
      </div>
      <p className="postText">{props.content}</p>
    </div>
  )
}
export default Comment;
