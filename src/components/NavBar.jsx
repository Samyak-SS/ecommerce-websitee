// import React, { useState } from 'react';
// import {menu, close, logo} from '../assets/navbar';
// const NavBar = () => {
//     const [toggle,setToggle] = useState(false);

//     const handleNavClick =()=>{
//       setToggle(!toggle)
//     }

//   return (
//     <div className='navbarRectangle z-20 w-screen  h-[80px] z-10 bg-white fixed drop-shadow-lg'>  
//       <div className='navbarContentDiv flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
//         <div className='flex items-center'>
//             <img src={logo} alt='logo' className=' xs:ml-5 sm:ml-5 md:ml-3 opacity-[55%] w-full h-[25px]' />

//         </div>

//         <div className=' navLinkss flex items-center '>
//           <ul className='hidden md:flex sm:mr-10'>
//             <li className='hover:bg-gray-200'>Home</li>
//             <li className='hover:bg-gray-200'>About us</li>
//             <li className='hover:bg-gray-200'>Categories</li>
            
//             <li className='hover:bg-gray-200'>Our Products</li>
//             <li className='hover:bg-gray-200'>Blogs</li>
//             <li className='hover:bg-gray-200'>Contact Us</li>
//           </ul>

//         </div>
//         <div className='md:hidden  ' onClick={handleNavClick}>
//           <img src={!toggle?menu:close} alt="menu" className=' hover:bg-gray-200 w-[28px h-[28px] object-contain me-10 '/>
//         </div>

        
      
//       </div>
//       <ul className={toggle?'absolute bg-white w-full px-8 md:hidden ':'hidden '}>
//             <li  className="py-5 text-center hover:bg-gray-200">Home</li>
//             <li  className="py-5 text-center hover:bg-gray-200">About us</li>
//             <li  className="py-5 text-center hover:bg-gray-200">Categories</li>
            
//             <li  className="py-5 text-center hover:bg-gray-200">Our Products</li>
//             <li  className="py-5 text-center hover:bg-gray-200">Blogs</li>
//             <li  className="py-5 text-center hover:bg-gray-200">Contact Us</li>
//         </ul>


//     </div>
//   )
// }

// export default NavBar

// // add this in indexcss file
// // @tailwind base;
// // @tailwind components;
// // @tailwind utilities;

// // @layer base {
// //     li{
// //         @apply p-4
// //     }
// //     button{
// //         @apply text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md
// //     }
  
// //     ul {
// //       padding: 0;
// //       list-style-type: none; }
  
      
// //       .line-break {
// //         white-space: pre-wrap;
// //         }
      
// //   }
import React, { useState } from 'react';
import { menu, close, logo } from '../assets/navbar';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navbarRectangle z-20 w-screen h-[80px] bg-white fixed drop-shadow-lg '>
      <div className='navbarContentDiv flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='xs:ml-5 sm:ml-5 md:ml-3 opacity-[55%] w-full h-[25px]' />
        </div>

        <div className='navLinkss flex items-center'>
          <ul className='hidden md:flex sm:mr-10 cursor-pointer'>
            <li className='hover:bg-gray-200 '>Home</li>
            <li className='hover:bg-gray-200'>About us</li>
            <li 
              className='relative hover:bg-gray-200' 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Categories
              {isDropdownOpen && (
                <ul className='absolute left-0 mt-2 bg-white shadow-lg'>
                  <li className='py-2 px-4 hover:bg-gray-100'>Fitness</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Medical</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Life Style</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Entertainment</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Pets and Animals</li>
                </ul>
              )}
            </li>
            <li className='hover:bg-gray-200'>Our Products</li>
            <li className='hover:bg-gray-200'>Blogs</li>
            <li className='hover:bg-gray-200'>Contact Us</li>
          </ul>
        </div>

        <div className='md:hidden' onClick={handleNavClick}>
          <img src={!toggle ? menu : close} alt="menu" className='hover:bg-gray-200 w-[28px] h-[28px] object-contain me-10' />
        </div>
      </div>

      <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
        <li className="py-5 text-center hover:bg-gray-200">Home</li>
        <li className="py-5 text-center hover:bg-gray-200">About us</li>
        <li 
              className='py-5 text-center hover:bg-gray-200' 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Categories
              {isDropdownOpen && (
                <ul className='py-5 text-center mt-2 bg-white shadow-lg'>
                  <li className='py-2 px-4 hover:bg-gray-100'>Fitness</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Medical</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Life Style</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Entertainment</li>
                  <li className='py-2 px-4 hover:bg-gray-100'>Pets and Animals</li>
                </ul>
              )}
            </li>
        <li className="py-5 text-center hover:bg-gray-200">Our Products</li>
        <li className="py-5 text-center hover:bg-gray-200">Blogs</li>
        <li className="py-5 text-center hover:bg-gray-200">Contact Us</li>
      </ul>
    </div>
  );
}

export default NavBar;
