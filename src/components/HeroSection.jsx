import React from 'react'


function HeroSection() {
    return (
        <div className='flex flex-col items-center justify-start py-20'>
            <div className='text-center'>
                <h1 className='mb-1 text-2xl font-semibold text-indigo-600 md:text-4xl md:mb-3 dark:bg-indigo-500'>Hi,This is Etisha</h1>
                <p className='max-w-md mb-3 text-gray-600 text-md md:text-xl dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, alias?</p>
                <a href="#" className='inline-block px-8 py-3 text-base font-medium text-white bg-indigo-600 border-transparent rounded-md hover:bg-indigo-700 md:text-md'>See Works</a>
            </div>
        </div>
    )
}

export default HeroSection 