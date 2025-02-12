# Translytic

**Translytic** is a powerful web application built with **React**, **Vite**, **Node.js**, and **TailwindCSS** that allows users to record audio, upload audio files, transcribe the audio into text, and translate the transcription into a language of their choice. Whether you're conducting interviews, attending meetings, or learning a new language, Translytic simplifies the process of converting speech to text and translating it seamlessly.

---

## ✨ Features

- **🎤 Audio Recording**: Record audio directly from your microphone.
- **📁 File Upload**: Upload existing audio files for transcription.
- **🔊 Speech-to-Text**: Transcribe audio into text with high accuracy.
- **🌍 Translation**: Translate transcribed text into multiple languages.
- **🎨 User-Friendly Interface**: Built with **TailwindCSS** for a clean and responsive design.
- **⚡ Fast Development**: Powered by **Vite** for lightning-fast builds and hot module replacement.

---

## 🛠️ Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js
- **Audio Processing**: Web Audio API
- **Speech-to-Text**: (e.g., Google Speech-to-Text API, Whisper by OpenAI, or any other service)
- **Translation**: (e.g., Google Translate API, DeepL API, or any other service)

---

## 🚀 Getting Started

Follow these steps to set up and run **Translytic** on your local machine.

---

### 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- A **speech-to-text API key** (e.g., Google Cloud, OpenAI Whisper, etc.)
- A **translation API key** (e.g., Google Translate, DeepL, etc.)

---

### 🛠️ Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/translytic.git
   cd translytic
   ```

2. **Install Dependencies**

   Navigate to the project root and install the required dependencies for both the frontend and backend.

   ```bash
   # Install dependencies
   cd myTranslytic
   npm install

   # Check package.json to see list of dependencies needed for isntall
   ```


3. **Start the App**

   Navigate to the `myTranslytic` directory and start the Node.js server.

   ```bash
   cd myTranslytic
   npm run dev
   ```

   The backend server will run on `http://localhost:5173`. Make sure to run this on an incogneto/private window.

---

## 🎯 Usage

1. **🎤 Record Audio**: Click the "Record" button to start recording audio from your microphone.
2. **📁 Upload Audio**: Alternatively, upload an audio file by clicking the "Upload" button.
3. **🔊 Transcribe**: Once the audio is processed, the transcription will appear on the screen.
4. **🌍 Translate**: Select a target language from the dropdown menu and click "Translate" to convert the transcription into your desired language.
5. **💾 Save or Export**: Save or export the transcription and translation as a text file.

---

## 📂 Folder Structure

```
translytic/myTranslytic
├──  # Frontend (React + Vite + TailwindCSS)
├── public/            # Static assets
├── src/               # React components and pages
├── vite.config.js     # Vite configuration
├── .gitignore
├── package.json
└── README.md              # Project documentation
```

---

## 🤝 Contributing

I welcome contributions! If you'd like to contribute to **Translytic**, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

---

## 🙏 Acknowledgments

- **Vite** for the fast development experience.
- **TailwindCSS** for the beautiful and responsive design.
- **React** for the component-based architecture.
- **Node.js** for the robust backend.

---

## ❓ Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/CameronMoreira/translytic/issues).

---

Enjoy using **Translytic**! 🎉
