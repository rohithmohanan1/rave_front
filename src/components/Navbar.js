import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Rave Academy</span>
        <div className='social'>
          <a href='/' target='_blank'>Home</a>
          <a href='/' target='_blank'>Products</a>
          <a href='/' target='_blank'>About US</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;