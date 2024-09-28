import { useState } from 'react'

const PostComp = ({ addComment }) =>{
    const [comment, setComment] = useState('')

const handleComment = (e)=> {
    e.preventDefault()
    if (comment.trim()){

    const date = new Date()
    const timeFrame = [date.getHours(), date.getMinutes(), date.getSeconds()];

    const timeNow = timeFrame
    .map((component) => component.toString().padStart(2, '0')).join(':');
    addComment({ text: comment, time: timeNow })
        setComment('')
    }}

    return (
        <>
    
        <div>
                <form id="comment-form" onSubmit={handleComment}>
                    <input
                        id="control-input"
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e)=> setComment(e.target.value)}
                        aria-label="Comment input"
                        required
                    />
                    <button type="submit" class="submit-button">Submit</button>
                </form></div>
      </>
    )
}
 export default PostComp;