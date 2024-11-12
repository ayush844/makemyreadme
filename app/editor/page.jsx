'use client'

import React, { useState } from 'react'

import ComponentsModal from '@/components/ComponentsModal'
import ReadmeEditor from '@/components/ReadmeEditor'
import Image from 'next/image'
import MarkdownPreviewer from '@/components/MarkdownPreviewer'
import { Container } from '@/components/Container'

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
    <div className='min-h-[90vh] w-screen lg:flex items-center justify-center relative py-6 hidden'>
      <button onClick={toggleModal} className="bg-primary border-white border-2 py-3 px-3  transition-all w-fit flex items-center justify-center gap-4  hover:scale-105 left-5 z-30 rounded-full absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
        <Image src={'/images/cubes.png'} width={40} height={40} alt='blocks' priority  />
        {/* <span className='text-black font-bold text-xl'>{modal ? "Hide Components":"Add Components"}</span> */}
      </button>

      {
        modal && (
          <>
          <div  onClick={toggleModal} className=" z-10 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(3,4,8,0.51)]"></div>
          <ComponentsModal />
          
          </>
          
        )
      }
      <div className="grid grid-cols-12 w-screen container mx-auto">
        <ReadmeEditor />
        <MarkdownPreviewer />
      </div>

    </div>
  )
}

export default Editor