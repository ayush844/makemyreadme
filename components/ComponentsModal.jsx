import components from '@/utils/components'
import React from 'react'
import Image from 'next/image'

const ComponentsModal = () => {
  return (
  <div className='bg-gray-900 w-[70vw] h-[80vh] text-white rounded-md border-2 border-primary grid grid-cols-3 p-6 gap-4
  absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20'>
    <div className='col-span-1 bg-gray-950 rounded-md h-full w-full overflow-y-auto overflow-x-hidden border border-gray-200 p-8 flex flex-col gap-4 scrollbar-thin scrollbar-webkit'>
    {components.map((component, index) => (
      <div key={index} className={`${component.tailwindClasses} cursor-pointer px-3 py-4 bg-gray-900`}>
        {component.name}
      </div>
    ))}
    </div>
    <div className='col-span-2 bg-slate-950 h-full w-full rounded-md border border-gray-200 flex flex-col gap-10 items-center justify-center overflow-y-auto overflow-x-hidden'>
        <Image src={'/icons/namaste.png'} alt='Namaste' width={150} height={150} priority  />
        <h1 className='text-4xl font-extrabold text-orange-600'>राम राम लाडले</h1>
    </div>
  </div>
  )
}

export default ComponentsModal




// const components = [
//   {
//     name: "Title",
//     tailwindClasses: "bg-gray-800 text-white font-bold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Description",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Quick Start Guide",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Code Block",
//     tailwindClasses: "bg-gray-900 text-green-400 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-800 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Installation Instructions",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Usage Example",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Badges",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Features",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Table of Contents",
//     tailwindClasses: "bg-gray-800 text-gray-300 font-medium text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Subtitle",
//     tailwindClasses: "bg-gray-800 text-gray-300 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "License",
//     tailwindClasses: "bg-gray-800 text-gray-500 italic text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Contributing",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Contact Information",
//     tailwindClasses: "bg-gray-800 text-blue-400 underline text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Divider",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Acknowledgments",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Images or GIFs",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "API Documentation",
//     tailwindClasses: "bg-gray-800 text-blue-300 font-mono text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Example Projects",
//     tailwindClasses: "bg-gray-800 text-gray-300 italic text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Support & Donations",
//     tailwindClasses: "bg-gray-800 text-pink-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "FAQ",
//     tailwindClasses: "bg-gray-800 text-gray-200 font-semibold text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "References",
//     tailwindClasses: "bg-gray-800 text-gray-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Version History",
//     tailwindClasses: "bg-gray-800 text-gray-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Credits",
//     tailwindClasses: "bg-gray-800 text-green-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Security",
//     tailwindClasses: "bg-gray-800 text-red-400 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
//   {
//     name: "Deployment",
//     tailwindClasses: "bg-gray-800 text-yellow-300 text-lg py-3 px-4 rounded-md text-center hover:bg-gray-700 hover:scale-105 transition-transform duration-200",
//   },
// ];