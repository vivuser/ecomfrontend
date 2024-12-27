"use client"
import { Card } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[200px] flex justify-center items-center bg-gray-100'>
      <Card className='m-2 p-1 w-full h-full flex justify-center items-center'>
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid w-12 h-12" />
        <span className="ml-4">Loading...</span>
      </Card>
    </div>
  )
}

export default Loader
