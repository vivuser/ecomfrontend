import React from 'react'

const Reviews = async () => {

  await new Promise((resolve) => setTimeout(resolve, 2000))

 const res = await fetch('https://676e7bf7df5d7dac1ccaca6e.mockapi.io/api/v1/users');
 const users = await res.json();

  return (
    <div className='bg-white m-2'>
        {users.map(user => (
            <div>
                {user.name}
            </div>
        ))}
    </div>
  )
}

export default Reviews