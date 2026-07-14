# Software Requirements Specification (SRS) - IRIS AI Attendance System

## 1. Introduction
### 1.1 Purpose
The purpose of this document is to provide a detailed description of the IRIS (Intelligent Recognition System) AI Attendance System. This system is designed to provide a secure, fraud-resistant, and high-performance attendance tracking solution for educational institutions, supplemented by intelligent student support via AI.

### 1.2 Project Overview
IRIS leverages cutting-edge AI technologies, including facial recognition, dynamic QR code rotation, and forensic document analysis, to ensure attendance integrity. The system consists of a FastAPI backend and a React-based frontend with a premium HUD-style aesthetic. A newly integrated cognitive layer provides an AI Chatbot powered by RAG (Retrieval-Augmented Generation) for institutional support.

---

## 2. System Architecture
- **Backend**: FastAPI (Python 3.10+)
- **Database**: SQLite with WAL (Write-Ahead Logging) for high concurrency.
- **AI Brain (Vision)**: 
    - `DeepFace` (VGG-Face model) for identity verification.
    - `InsightFace` (buffalo_l) for real-time student enrollment and embedding extraction.
    - `EasyOCR` for document text extraction.
    - `OpenCV` for QR detection, ELA, and image processing.
- **AI Brain (Cognitive)**:
    - **LLM Engine**: Integration with high-performance Large Language Models (e.g., Llama 3 or Mistral) for natural language understanding.
    - **RAG Model**: Retrieval-Augmented Generation using a **Vector Database (ChromaDB)** to provide context-aware responses from system logs and institutional handbooks.
- **Frontend**: React 19 with Glassmorphism UI and dynamic liquid backgrounds.

---

## 3. Functional Requirements

### 3.1 User Management & Authentication
| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-1.1** | **Faculty Registration** | Allows teachers to register using their official `@iris.com` email address. |
| **FR-1.2** | **Faculty Login** | Secure authentication for faculty members to access class management tools. |
| **FR-1.3** | **Student Registration** | Allows students to register using their Campus ID (prefix `0113-`). Requires capturing a reference photo and mandatory institutional metadata (Branch, Semester, Section). |
| **FR-1.4** | **Student Login** | Identity-based login via Campus ID. Redirects to registration if ID is not found. |

### 3.2 Attendance Management (Faculty)
| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-2.1** | **Session Initialization** | Faculty can start a new attendance session by providing a class name (e.g., "CS101 - Lecture 04"). |
| **FR-2.2** | **Dynamic QR Rotation** | Generates a unique `CLASS_VERIFY_XXXX` code that rotates every 10 seconds to prevent QR sharing/proxying. |
| **FR-2.3** | **Live Polling** | Real-time monitoring of attendance logs as students verify themselves. |
| **FR-2.4** | **Expiry Management** | Rolling window of valid codes (keeps only the 5 most recent) to maintain security. |
| **FR-2.5** | **Radar Engine** | Faculty can launch the "Radar Vision Loop" for autonomous, multi-student attendance capturing via computer vision. |
| **FR-2.6** | **Session Policies** | Enforces a **45-minute minimum session duration** and a **30-minute Radar lockdown timer** to prevent late-session spoofing. |

### 3.3 Attendance Verification (Student)
| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-3.1** | **QR Scanning** | Integrated camera scanner to capture the dynamic QR code from the teacher's screen. |
| **FR-3.2** | **AI Face Matching** | Captures a live selfie and compares it against the registered reference photo using the VGG-Face model. |
| **FR-3.3** | **Verification Status** | Immediate feedback on attendance status (Present - Verified ✅ or Rejected - Fake/Mismatch ❌). |
| **FR-3.4** | **History Tracking** | Students can view their past attendance logs with timestamps and class details. |
| **FR-3.5** | **Student Analytics** | High-visibility HUD dashboard displaying total classes, attended sessions, and overall attendance percentage. |

### 3.4 Achievement & Certificate Verification
| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-4.1** | **Certificate Upload** | Students can upload digital certificates for institutional verification. |
| **FR-4.2** | **QR Forensic Check** | Detects and decodes QR codes within the uploaded document to verify source authenticity. |
| **FR-4.3** | **OCR Name Match** | Uses EasyOCR to ensure the name on the certificate matches the student's registered name. |
| **FR-4.4** | **ELA Tamper Detection** | Performs Error Level Analysis (ELA) to identify digital manipulation of certificates. |
| **FR-4.5** | **Audit Reporting** | Generates a detailed security report with a confidence score and forensic logs. |

### 3.5 AI Assistant & RAG Support
| ID | Feature | Description |
| :--- | :--- | :--- |
| **FR-5.1** | **Natural Language Support** | A conversational interface for students to ask questions about their attendance, schedules, and system usage. |
| **FR-5.2** | **RAG-Driven Knowledge** | The chatbot retrieves information from the IRIS knowledge base and student handbooks to provide accurate institutional guidance. |
| **FR-5.3** | **Contextual Analysis** | Analyzes user queries to provide specific insights (e.g., "Why was my certificate rejected?") based on forensic logs. |
| **FR-5.4** | **Real-time Enrollment** | Students are automatically enrolled into the vector database upon successful registration. |

---

## 4. Institutional Policy Enforcement
### 4.1 Attendance Integrity
- **Minimum Session Duration**: A class session must remain open for at least 45 minutes to be valid.
- **Radar Vision Lockdown**: The Radar Engine automatically stops accepting new student scans after 30 minutes to prevent proxy attendance.
- **Email Domain Restriction**: Faculty access is strictly limited to `@iris.com` domains.

## 4. UI/UX Requirements (IRIS HUD Aesthetics)
| ID | Feature | Description |
| :--- | :--- | :--- |
| **UR-1.1** | **Liquid Background** | Interactive mouse-tracking liquid blobs for a premium, dynamic feel. |
| **UR-1.2** | **Glassmorphism** | Semi-transparent surfaces with high-intensity backdrop blurs (50px+). |
| **UR-1.3** | **Theme Support** | Seamless toggle between "Deep Abyss" Dark Mode and high-contrast Light Mode. |
| **UR-1.4** | **System HUD** | Status bar displaying Node IP, Uptime, and AI Pipeline status. |
| **UR-1.5** | **Chatbot Interface** | An integrated, floating HUD component for AI interactions with real-time streaming text. |
| **UR-1.6** | **Analytics HUD** | Subject-wise progress bars and overall performance radar charts. |

---

## 5. Non-Functional Requirements
### 5.1 Security
- **Email Restriction**: Faculty must use institutional emails.
- **AI-Powered Anti-Cheat**: Prevents photo-of-photo or proxy scans via face matching and short-lived QR codes.
- **LLM Privacy**: Ensures user queries are handled securely and no PII (Personally Identifiable Information) is leaked to external LLM providers.
- **Liveness Detection**: Integrated texture analysis to detect "photo-of-photo" or "screen-of-screen" spoofing attempts.

### 5.2 Performance
- **WAL Mode**: Ensures database integrity during high-concurrency attendance spikes.
- **Optimized AI**: Face detection uses `opencv` backend for speed; verification distance threshold set at `0.4` for accuracy.
- **RAG Efficiency**: Vector search latency optimized to under 500ms for real-time assistant responses.
- **GPU Acceleration**: Utilizes NVIDIA CUDA for high-speed facial recognition and liveness detection.

---

## 6. Technical Limitations & Future Scope
- **Identity Handling**: Currently transitioning from static ID handling (ID 101) to fully dynamic student profiling.
- **Processing Time**: OCR and ELA analysis may take 3-5 seconds; the AI Assistant utilizes asynchronous processing to maintain UI responsiveness.
- **Language Coverage**: The LLM currently prioritizes English, with multi-language support planned for future iterations.

