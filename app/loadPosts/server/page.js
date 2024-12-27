import React from 'react'

const ServerPage = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json()

  return (
    <div>
    {posts.map(post => (
        <li>
            {post.body}
        </li>
    ))}
    </div>
  )
}

export default ServerPage