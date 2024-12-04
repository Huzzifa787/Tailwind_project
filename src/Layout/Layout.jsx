import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className='pt-10'>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout