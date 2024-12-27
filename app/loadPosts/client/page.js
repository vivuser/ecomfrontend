"use client"
import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ClientPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {      
        const fetchData = async () => {

            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                console.log(res, 'res')
                const data = await res.json()
                setPosts(data)
            }   
            catch(err) {
                console.log(err)
            }

        }
        fetchData();

    },[])

    console.log(posts, 'possts')

  return (
    <div className='flex flex-wrap justify-center'>
    
    {posts.map(post => (
        <Card sx={{ width: "300px", height: "200px", margin: "10px"}}>{post.body}</Card>
    ))}
    </div>
  )
}

export default ClientPosts