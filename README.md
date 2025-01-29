# 🚀 GenAI Story Writer - AI-Powered Storytelling

GenAI Story Writer is an advanced AI-powered application designed to generate creative and unique stories based on user input. By leveraging **LangChain**, **FastAPI**, and **Groq API**, this project enables dynamic and engaging story generation with customizable story elements. The sleek frontend is built using **React, Tailwind CSS, and Mantine UI**, ensuring a seamless user experience.

## ✨ Features

- 📝 **Custom Story Generation** – Define genre, title, characters, setting, protagonist, antagonist, tone, conflict, dialogue and theme.
- 🔥 **AI-Powered Writing** – Utilizes Groq API with LangChain for intelligent text generation.
- ⚡ **Fast & Efficient Backend** – Built with FastAPI for high-speed processing.
- 🎨 **Modern UI** – React + Mantine UI + Tailwind CSS for an intuitive and responsive interface.
- 📚 **History & Editing** – Review and edit generated stories.

## 🚀 Tech Stack

| Component  | Technology |
|------------|-----------|
| **Frontend** | React, Tailwind CSS, Mantine UI |
| **Backend**  | FastAPI, LangChain, Groq API |
| **AI Model** | Gemma 2 9B (via Groq API) |
| **State Management** | React Context (or Zustand, if used) |
| **Deployment** | (Specify if using Vercel, Render, or another platform) |

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/wmdgimhana/GenAI-Story-Writer.git
cd GenAI-Story-Writer
```
### **2️⃣ Backend Setup**
1. Navigate to the backend folder
```sh
cd backend
```
2. Create a virtual environment
```sh
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
```
3. Install dependencies
```sh
pip install -r requirements.txt
```
4. Set up environment variables (.env file)
```sh
GROQ_API_KEY=your_groq_api_key
```
5. Run the FastAPI server
```sh
uvicorn main:app --reload
```

### **3️⃣ Frontend Setup**
1. Navigate to the frontend folder
```sh
cd frontend
```
2. Install dependencies
```sh
npm install
```
3. Start the development server
```sh
npm run dev
```

## 📬 Contact
For any inquiries, reach out via [GitHub Issues](https://github.com/wmdgimhana/GenAI-Story-Writer.git/issues).
