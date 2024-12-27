"use client"
import React from 'react'
import CategorySliders from '../common/CategorySliders'
import BasicSelect from '../components/BasicSelect'

const layout = ({children}) => {
  return (
    <div className='m-10'>
      <CategorySliders />
      {/* <BasicSelect /> */}
      {children}
    </div>
  )
}

export default layout