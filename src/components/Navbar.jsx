// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex  max-h-[200px] items-center justify-between m-5 '>
       
//        <div className='flex gap-3  m-3 '>
//            <img   className='w-[30px] h-[30px]' src='https://code.visualstudio.com/assets/apple-touch-icon.png' />
//            <h1 className='text-2xl font-bold'>Visual studio code</h1>
//        </div>

      
//       <div className=' products '>
//          <ul className='flex gap-6 text-lg  font-semibold'>
//             <li>Docs</li>
//             <li>Updates</li>
//             <li>Blog</li>
//             <li>Api</li>
//             <li>Extensions</li>
//             <li>FAQ</li>
//          </ul>
//        </div>

//        <div className=' searchbtn  flex m-4 gap-4 justify-center items-center '>
//           <div className='' src='https://code.visualstudio.com/assets/icons/theme-dark.svg'/>

//           <div className='relative '>
//              <img className='absolute pt-[15px] pl-[2px] ' src='https://code.visualstudio.com/assets/icons/search-dark.svg'/>
//              <input className='p-[20px]   border h-[20px] w-full' placeholder='Search Your Docs'></input>
//           </div>

//           <button className='text-white bg-btn-blue rounded h-[50px] w-[100px] mt-[5px]'>DownLoad</button>
//        </div>
      

//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import sidebar_icon from './sidebar_icon.png';


const Navbar = () => {
  return (
    <div className='flex max-h-[200px] items-center justify-between m-5'>
       
       <div className='flex gap-3 m-3'>
           <img className='w-[30px] h-[30px]' src='https://code.visualstudio.com/assets/apple-touch-icon.png' />
           <h1 className='text-2xl font-bold'>Visual Studio Code</h1>
       </div>

       <div className='md:hidden items-center justify-center' >
           <img className='h-[40px] w-[40px]' src= {sidebar_icon}/>
       </div>

       <div className='hidden md:flex products'>
         <ul className='flex gap-6 text-lg font-semibold'>
            <li>Docs</li>
            <li>Updates</li>
            <li>Blog</li>
            <li>API</li>
            <li>Extensions</li>
            <li>FAQ</li>
         </ul>
       </div>

       <div className='hidden md:flex searchbtn m-4 gap-4 justify-center items-center'>
          <div src='https://code.visualstudio.com/assets/icons/theme-dark.svg'/>

          <div className='relative'>
             <img className='absolute pt-[15px] pl-[2px]' src='https://code.visualstudio.com/assets/icons/search-dark.svg'/>
             <input className='p-[20px] border h-[20px] w-full' placeholder='Search Your Docs'></input>
          </div>

          <button className='text-white bg-btn-blue rounded h-[50px] w-[100px] mt-[5px]'>Download</button>
       </div>
    </div>
  )
}

export default Navbar
