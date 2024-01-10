import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


const PostsList = () => {
  const posts = useSelector(selectAllPosts) // here we are grabing the posts form postslice  with useSelector 


  const renderPost = posts.map(post =>(   // here we are mapping throught posts grabing the reducers to be mapped and render. 
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
    </article>
  ))
  return (
    <div>
      <h2>POSTS</h2>
      {renderPost}
    </div>
  )
}

export default PostsList