"use client"

import React, { useEffect } from 'react'

const Error = (error) => {

    useEffect(() => {
        console.log(error)
    },[error])

  return (
    <div className='text-2xl text-red-500'>error fetching posts</div>
  )
}

export default Error