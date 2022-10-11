import React from 'react'

function ServiceItem({title,icon,description}) {
  return (
    <div className='p-5 transform rounded-md bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transistion'>
        <div className='w-6 h-6 mb-3 text-gray-800 dark:text-gray-300'>{icon}</div>
        <h1 className='mb-1 text-lg font-semibold text-gray-600 dark:text-gray-200'>{title}</h1>
        <p className='text-gray-600 text-md dark:text-gray-300'>{description}</p>
    </div>
  )
}

export default ServiceItem    