import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Namecard from '../components/namecard'
import Navbar from '../components/navbar/navbar'
import anime from 'animejs'
import {BsChevronDoubleDown} from 'react-icons/bs' 

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

  return (
    <>
    <Navbar/>

      <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
        <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-6xl md:text-8xl break-words'>Contact📒</div>
        <a href="#organizers"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      
      </div>

        <div className="w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[50%] sm:max-w-[90%] border-solid ml-16 mr-12">
        <div className="border-2 shadow-md mb-5 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white rounded-lg text-gray-900"></div>
        </div>
        <div className="w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[50%] sm:max-w-[90%] ml-16 mr-12"></div>
        <div className="w-full h-screen bg-fixed bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[50%] sm:max-w-[90%] ml-16 mr-12"></div>      
    </>

  )
}
