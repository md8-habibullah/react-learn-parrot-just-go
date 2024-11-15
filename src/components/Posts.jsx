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
    <div>
      <h2>I am posts</h2>


      {
        posts.map((postsingle) => <pre>ID: {postsingle.id}<br></br>
        Title: {postsingle.title} <br></br> Body: {postsingle.body} <hr /></pre>
        

        )
      
      }
    </div>
  )
}
