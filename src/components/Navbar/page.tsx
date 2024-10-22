import React from 'react'

 const Navbar = () => {
  return (
              <div className='bg-light bg-green-400 h-12'>
                <div className='text-black-400 flex justify-between items-center '>
                <h1 className='text-2xl m-2 cursor-pointer'>Huma Moin</h1>
                <ul className='flex gap-4 mr-4'>
                  <li><a className='hover:text-white' href="">Home </a> </li>
                  <li><a className='hover:text-white' href="">About</a> </li>
                  <li><a className='hover:text-white'href="">Contact</a> </li>
                  

                  
                </ul>
              </div>
              </div>
              )
            }
            
        export default Navbar
  

