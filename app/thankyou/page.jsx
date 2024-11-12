import { Container } from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const ThankYou = () => {
  return (
    <div className='text-white min-h-[90vh] w-screen flex flex-col items-center pt-0'>
        <div className=' flex flex-col gap-4 items-center container mx-auto '>
            <Image src={'/images/thank_you.png'} width={400} height={200} alt='thankyou' priority />
            <p className='text-xl sm:text-2xl md:text-3xl font-bold text-center mt-[-2rem]'>We hope <span className=' text-primary'>makemyREADME</span> helped you create a README that stands out. <span className=' text-2xl md:text-4xl'>💜</span></p>
        </div>

        <div className=' flex justify-center gap-4 md:gap-8  items-center container max-w-[60rem] mx-auto mt-20'>
            <Image src={'/images/megaphone.png'} width={80} height={80} alt='speaker' priority />
            <div className='flex flex-col gap-4'>
                <p className=' text-2xl font-medium'>We don’t charge you a thing! If you enjoyed using makemyREADME, support us by sharing it with your network and helping spread this free tool to developers everywhere</p>
                <div className=' flex flex-col md:flex-row items-center justify-evenly gap-4 md:ml-[-1rem]'>
                    <a>
                        <Image src={'/images/twitter.png'} width={140} height={140} alt='twitter' className=' hover:scale-110 cursor-pointer transition-all' priority />
                    </a>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='w-20 border-b border-gray-400 hidden md:block'></div>
                        <span className=' text-gray-400 text-2xl font-thin mt-[-1.5rem] md:mt-0 '>OR</span>
                        <div className='w-20 border-b border-gray-400 hidden md:block'></div>
                    </div>
                    
                    <a>
                        <Image src={'/images/linkedin.png'} width={90} height={90} alt='linkedin' className=' hover:scale-110 cursor-pointer transition-all' priority />
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ThankYou