import React, {useState} from 'react'
import Axios from 'axios'

function MyUser() {

    return(
    <div>
    <h2>Post</h2>
    <label>Enter post</label>
    <input type="text" placeholder="Thoughts"/>
    <button > post </button>
    </div>
    )
}

export default MyUser