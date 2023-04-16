// Task 1: Create a BlogPost component that takes in the following props:
import "./index.css";

 function BlogPost(props)  
 {
  let blog =
  {title: "My first post",
    author: "Robot GPT",
    datePosted: "16/04/2023",
    content: "A structure used in most apps and games. It's a way to keep doing the same. While a condition is true, Or for one to twenty-two. If endless, for errors we blame ..........Loop",
    imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    imageAlt: "A couple of coders."
  }

  return (
   
    <div className="blogPost">
    <div className="postInfo">
      <h2>{blog.title}</h2>
      <h3>by {blog.author}</h3>
      <p className="date">{blog.datePosted}</p>
      <hr />
      </div>
      <div className="image">
      <img src={blog.imageSrc} alt={blog.imageAlt}/>
      <p className="alt">{blog.imageAlt}</p>
      </div>
      <p className="content">{blog.content}</p>
      </div>
  )
}
console.log(typeof(BlogPost));
export default BlogPost;
