import { useState } from "react"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
const dispatch = useDispatch();
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const onSavePostClicked = (e) =>{
    e. preventDefault()
    if (title && content){ 
        dispatch(
            postAdded(title, content) // here we will just add the input form from the useState and will be rest will just be handle with our prepared callback. 
        )
        setTitle('')
        setContent("")
    }
}




  return (
    <section>
    <p>create posts</p>
    <form>

        <label htmlFor="postTitle"> Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title}  onChange={(e) => setTitle(e.target.value)}></input><br/>

        <label htmlFor="postContent"> Post Content:</label>
        <input type="text" id="postContent" name="postContent" value={content}  onChange={(e) => setContent(e.target.value)}></input><br/>

        <input type="submit" onClick={onSavePostClicked}></input>

    </form>
    
    </section>
  )
}

export default AddPostForm