import React from 'react'

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000)); 
  
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await response.json();

  return (
    <div className='bg-white m-2'>
    {posts.map(post => (
        <div key={post.id}>
            {post.body}
        </div>
    ))}
    </div>
  )
}

export default Product