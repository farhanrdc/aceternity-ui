"use client"

import Container from "./ui/container"
import { MainNav } from "./main-nav"



const Navbar = () => {
  
  return (
    <>
    
    <Container>
        <div className='relative left-0 right-0 w-full  sm:px-6 lg:px-8 flex h-16 items-center'>     
          <MainNav />
        </div>
    </Container>
    </>
  )
}

export default Navbar
