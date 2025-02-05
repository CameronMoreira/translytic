import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Information from './components/Information'
import Transcribing from './components/Transcribing'

function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [output, setOutput] = useState(true)
  const [loading, setLoading] = useState(true) // deafult should be false

  const isAudioAvailable = file || audioStream

  function handleAudioReset() {
    setFile(null)
    setAudioStream(null)
  }

  useEffect(() => {
    console.log(audioStream)
  }, [audioStream])

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />
        {output ? (
          <Information/>
        ) : loading ? (
          <Transcribing/>
        ) : isAudioAvailable ? (
          <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={setAudioStream}/>
        ) : (
          <Home setFile={setFile} setAudioStream={setAudioStream}/>
        )}
      </section>
    </div>
  )
}

export default App
