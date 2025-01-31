import React, {useState, useEffect, useRef} from 'react'

export default function Home(props) {
    const {setFile, setAudioStream} = props // Destructuring props

    const [recordingStatus, setRecordingStatus] = useState('inactive') // inactive, recording, paused
    const [audioChunks, setAudioChunks] = useState([]) // Audio chunks
    const [duration, setDuration] = useState(0) // Duration of the recording

    const mediaRecorder = useRef(null) // Media recorder ref

    const mimeType = 'audio/webm' // Mime type for the media recorder

    async function startRecording() {
        let tempStream

        console.log('Recording started')

        try {
            const streamData = navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            }) // Get the audio stream
            tempStream = streamData
        } catch (error) {
            console.error(error.message)
            return 
        }

        const media = new MediaRecorder(tempStream, {type: mimeType}) // Create a new media recorder instance using the stream
        mediaRecorder.current = media // Set the media recorder ref
        mediaRecorder.current.start() // Start the media recorder
        let localAudioChunks = [] // Local audio chunks
        mediaRecorder.current.ondataavailable = (e) => {
            if (typeof e.data === 'undefined' || e.data.size === 0) {
                return
            }
            localAudioChunks.push(e.data) // Push the data to the local audio chunks
        }
        setAudioChunks(localAudioChunks) // Set the audio chunks
    }

    return (
        <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl' >Trans<span className="text-blue-400 bold">Lytic</span></h1>
            <h3 className='font-medium md:text-lg'>Record <span 
            className='text-blue-400'>&rarr;</span> Transcribe <span 
            className='text-blue-400'>&rarr;</span> Translate</h3>
            <button className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
                <p className='text-blue-400'>Record</p>
                <i className="fa-solid fa-microphone"></i>
            </button>
            <p className='text-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload 
                <input onChange={(e) => {
                    const tempFile = e.target.files[0] // Get the first file
                    setFile(tempFile) // Set the file
                }} className='hidden' type='file' accept='.mp3,.wave'>
                </input></label> a mp3 file</p>
            
        </main>
    )
}

