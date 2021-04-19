import React from 'react'
import Axios from 'axios'

async function MyUser() {
    
    let res = await Axios.get('/users/Kyle')

    let user = res.data

    console.log(user)

    return(
        <div>I am user</div>
    )
}

export default MyUser