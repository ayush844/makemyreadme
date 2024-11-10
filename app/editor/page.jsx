'use client'

import React, { useState } from 'react'

import ComponentsModal from '@/components/ComponentsModal'
import Image from 'next/image'

const Editor = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(modal => !modal);
  };

  if(modal) {
    document.body.classList.add('overflow-y-hidden')
  } else {
    document.body.classList.remove('overflow-y-hidden')
  }


  return (
    <div className='min-h-[90vh] w-screen flex items-center justify-center relative'>
      <button onClick={toggleModal} className="bg-[#FF8000] py-1 px-3 rounded-lg transition-all w-fit flex items-center justify-center gap-4  hover:scale-105 absolute bottom-8 left-8 z-20">
        <Image src={'/images/cubes.png'} width={50} height={50} alt='blocks' />
        <span className='text-black font-bold text-xl'>{modal ? "Hide Components":"Add Components"}</span>
      </button>

      {
        modal && (
          <>
          <div  onClick={toggleModal} className=" fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.31)]"></div>
          <ComponentsModal />
          
          </>
          
        )
      }

    </div>
  )
}

export default Editor