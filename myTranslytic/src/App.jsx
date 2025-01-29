import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col p-4 max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <header className='flex items-center justify-between gap-4'>
          <h1>Trans<span className='text-blue-400'></span>Lytic</h1>
          <button className='flex itmes-center gap-2'>
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
          </button>

        </header>
        <main className='flex-1'>

        </main>
      </section>
    </div>
  )
}

export default App
