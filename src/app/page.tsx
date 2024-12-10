import React from 'react'
import Header from "../app/Component/Header"
import Hero from "../app/Component/hero"
import Browse from "../app/Component/browse"
import Product from "../app/Component/product"
import Inspiration from "../app/Component/inspirations"
import Furniture from "../app/Component/furniture"
// import Footer from './Component/footer'


const page = () => {
  return (
    <div> 
      <Header/>
      <Hero />
      <Browse/>
      <Product />
      <Inspiration />
      <Furniture />
      {/* <Footer/> */}


    </div>
  )
}

export default page
