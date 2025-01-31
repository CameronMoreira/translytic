import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <h1 className='fond-medium'>Trans<span className='text-blue-400 bold'>Lytic</span></h1>
        <button className='flex itmes-center gap-2 specialBtn px-3 text-sm p-2 rounded-lg text-blue-400'>
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}
