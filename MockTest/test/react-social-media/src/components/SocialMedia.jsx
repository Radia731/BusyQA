import { useState } from 'react'
import PostComp from './PostComp';

const SocialMedia = () =>{
 const [count, setCount] = useState(0);
 const [comments, setComments] = useState([])
 
//  adding multiple entires
 const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment])  }
return (
    <>
    <div className="feed">
    <h1>Social Feed</h1>
    <p>React is the best front end library</p>
    <p>{count} likes</p>
    </div>

    <p class="post-message">Post Message</p>
     {/* My Button */}
     <button onClick={()=> setCount((count) => count + 1)}>Like</button>
    
   
    
    <div>
    <h4>Comments:</h4>
    {/* i am mapping thru the comment and the timestamp obj */}
   {comments.map((comment, index) => (<p>{comment.text} <br /> <small>{comment.time}</small></p>))}
    <PostComp addComment={addComment} />

    </div>
    </>
)

}

export default SocialMedia;