// import React from 'react'
// https://jsonplaceholder.typicode.com/posts 

import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {

  const [posts, setPosts] = useState([])

 { useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json())
      // .then(data => console.log(data))
      .then(data=> setPosts(data))
  }, [])}


  return (
    <div className="post">
      {
        posts.map((postsingle) => <Post key={postsingle.id} postsingle={postsingle} ></Post>
        )
      }
    </div>
  )
}
