# IRIS AI Attendance System

![IRIS AI Banner](assets/banner.png)

## 👁️ Overview
**IRIS (Intelligent Recognition System)** is a state-of-the-art, AI-powered attendance tracking platform designed to eliminate fraud, streamline classroom management, and provide intelligent student support. Built with a "Security First" philosophy, IRIS leverages advanced computer vision, forensic document analysis, and retrieval-augmented generation (RAG) to create a seamless and trustworthy institutional ecosystem.

---

## 🚀 Key Features

### 🛡️ Fraud-Proof Attendance
*   **AI Face Matching:** Real-time identity verification using the **VGG-Face** model (DeepFace).
*   **Liveness Detection:** Advanced texture and reflectance analysis to prevent "photo-of-photo" spoofing.
*   **Dynamic QR Rotation:** Class codes rotate every 10 seconds with 10s dynamic token expiry, preventing proxy attendance sharing.
*   **Radar Vision Loop:** Autonomous, multi-student attendance capturing for rapid classroom processing.

### 🔍 Forensic Document Verification
*   **ELA Tamper Detection:** Error Level Analysis to identify digital manipulation in uploaded certificates.
*   **OCR Semantic Match:** CRAFT & CRNN-based text extraction to ensure certificate data matches student records.
*   **QR Integrity Check:** Source authenticity verification for digital documents.

### 🤖 Intelligent Cognitive Layer
*   **RAG-Powered Chatbot:** A contextual AI assistant trained on institutional handbooks and system logs using **ChromaDB**.
*   **Student Analytics:** High-visibility HUD dashboards providing real-time insights into attendance trends and performance metrics.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Backend** | FastAPI (Python 3.10+), Asynchronous I/O |
| **Frontend** | React 19, Vanilla CSS (Glassmorphism, Liquid Backgrounds) |
| **Vision AI** | DeepFace (VGG-Face), InsightFace, OpenCV |
| **Forensics** | PIL (ELA), EasyOCR |
| **Storage** | SQLite (WAL Mode), ChromaDB (Vector Search) |
| **Acceleration** | NVIDIA CUDA GPU Acceleration |

---

## 📦 Installation & Setup

### Prerequisites
- Python 3.10+
- Node.js & npm
- NVIDIA GPU with CUDA (optional, for acceleration)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend-server
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```bash
   python main.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 📐 System Architecture
IRIS is built on a modular architecture where the **Vision Engine** handles identity, the **Forensic Engine** handles document integrity, and the **Cognitive Engine (RAG)** handles user interaction. The system uses **SQLite with Write-Ahead Logging (WAL)** to maintain high concurrency during peak attendance hours.

---

## 📜 Institutional Policy
*   **Minimum Session Duration:** 45 minutes required for valid session closure.
*   **Radar Lockdown:** Vision loop automatically terminates after 30 minutes to prevent late-entry spoofing.
*   **Domain Restriction:** Faculty access limited to institutional `@iris.com` emails.

---

## 🤝 Contributing
We welcome contributions to improve the AI models, UI aesthetics, and security protocols. Please refer to `SRS.md` and `TECH_STACK.md` for detailed technical specifications.

## 📄 License
This project is proprietary and intended for institutional use.

---
*Developed with ❤️ by the IRIS AI Team.*
