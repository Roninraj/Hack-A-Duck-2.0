import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import {BsChevronDoubleDown} from 'react-icons/bs'
import anime from 'animejs'
import { useEffect, useState } from 'react'

export default function About() {
  setTimeout(() => {

    anime({
      targets: '.come',
      scaleX: [
        { value: 2, duration: 200, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
      ],
      easing: 'easeOutElastic(1, .8)',
    });
    
  }, 0);


  const [browser, setbrowser] = useState(false)
  useEffect(() => {
    setbrowser(true)
  }, [])
  

  if(browser){

  return (
    <>

            <Head>
                <title>
                Hack-A-Duck 2.0
                </title>
            </Head>

                
            <Navbar/>

            <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

                <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-7xl md:text-8xl break-words'>Contacts📒</div>
                <a href="#showcase"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

            </div> 
     
        <div className="flex justify-center w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-24 max-w-[50%] sm:max-w-[90%] border-solid ml-12 mr-16">
        <div className="border-2 shadow-md w-1/3 h-1/2 mt-24 bg-[url('../public/bgtabby.png')] bg-fixed rounded-lg text-gray-900 "><div className=''><img src='/psyberduckfinallogo-removebg.png' alt='Psyberduck'></img></div></div>
        </div>

        <div className="flex justify-center w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-24 max-w-[50%] sm:max-w-[90%] border-solid ml-12 mr-16">
        <div className="border-2 shadow-md w-1/3 h-1/2 mt-24 bg-[url('../public/bgtabby.png')] bg-fixed backdrop-blur-md rounded-lg text-gray-900 justify-center"><div className=' p-20'><img src='/iet.png' alt='IET'></img></div></div>
        </div>

        <div className="flex justify-center w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-24 max-w-[50%] sm:max-w-[90%] border-solid ml-12 mr-16">
        <div className="border-2 shadow-md w-1/3 h-1/2 mt-24 bg-[url('../public/bgtabby.png')] bg-fixed rounded-lg text-gray-900 justify-center pt-20"><div className='px-6'><img src='/SDS.png' alt='SDS'></img></div></div>
        </div>
    
    </>

  )

  }
}
