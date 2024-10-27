import React from 'react'

const Navbar = () => {
    
  return (
    <>
    <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center'>
        <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
             Max Store
        </div>
        <div className='w-[40%] flex justify-start items-center'>
                <ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>

        </div>

    </div>
    </>
  )
}

export default Navbar