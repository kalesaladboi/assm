import React, {useState} from 'react'
import Axios from 'axios'

async function MyUser() {

    const [makePost, setPost] = useState("")

    var post = () =>  {
        Axios.post(`http://localhost:6969/`, {
            post: makePost
        })
    }

    return(
    <div>
    <h2>Post</h2>
    <label>Enter post</label>
    <input type="text" placeholder="Thoughts" onChange={(e) => {setPost(e.target.value)}}/>
    <button onClick={post}> Login </button>
    </div>
    )
}

export default MyUser