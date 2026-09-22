# Full-Stack Text-to-Speech (TTS) Web Application

A responsive, full-stack browser-based web application designed to convert written text into spoken audio across multiple languages, voice tones, and genders. 

## 📁 Project Structure

* Frontend: Built with React and Vite, featuring a modern UI with separate modular components, live character counting, language selection, voice tone customization, and transcript downloading.
* Backend : Built with Node.js and Express using a structured MVC pattern (controllers, routes, and middleware) to handle voice configurations and text processing.


###🛠️ Core Frontend Features

*Text Input & Validation: Allows users to enter text with live character and word count tracking.   
*Language & Voice Selectors: Dropdowns to choose supported languages (such as English, Hindi, and Spanish) and specific voice options.  
*Generate & Play: Triggers the backend REST API and provides an interactive audio player with play, pause, seek, and volume controls.   
* Download & Error Handling: Enables users to download generated audio files and gracefully displays error messages for network or API failures.

## 🚀 Quick Setup Instructions

### 1. Run Frontend (`http://localhost:5174`)
```powershell
cd frontend
npm install
npm run dev
