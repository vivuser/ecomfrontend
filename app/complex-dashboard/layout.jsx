import React from 'react'
import Notifications from './@notifications/page'
import Revenue from './@revenue/page'
import Users from './@users/page'

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex flex-wrap max-w-6xl'>
      {children}
    <Notifications />
    <Revenue />
    <Users />
    </div>
  )
}

export default DashboardLayout