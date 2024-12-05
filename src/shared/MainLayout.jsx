import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default MainLayout