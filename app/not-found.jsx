import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center">  {/* Center the content */}
        {/* 404 Image */}
        <div className="flex justify-center">
          <Image src="/icons/error-404.png" alt="error" width={250} height={250} priority  />
        </div>
        
        {/* Page Not Found Message */}
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-6xl">Page not found</h1>
        
        {/* Description */}
        <p className="mt-6 text-base md:text-lg leading-7 text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        
        {/* Go Back Home Link */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#9333ea] px-3.5 py-2.5 text-sm md:text-md font-bold text-white shadow-sm hover:bg-[#822bb1] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9333ea]"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
