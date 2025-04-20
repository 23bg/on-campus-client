import React from 'react'
import { Link } from 'react-router-dom'

const Footer = React.memo(() => {
  return (
    <div className='w-full flex justify-center items-center p-5 text-xs'>
        <div className="mb-2 md:mb-0 text-center md:text-left">
    &copy; {new Date().getFullYear()}{" "}
    <Link to='https://github.com/23bg' target='_blank'>
    <span className="font-medium text-blue-600">
      Bugs and Glitches
    </span></Link>
    . All rights reserved.
  </div>
    </div>
  )
})

export default Footer