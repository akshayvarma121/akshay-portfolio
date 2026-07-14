# AI Attendance System - Technical Analysis & PRD/SRS Report

## 1. Project Overview
The **AI Attendance System** is designed to prevent proxy attendance by combining dynamic QR code rotation with AI-powered facial recognition and liveness detection. It uses a FastAPI backend and a React frontend.

**Current Status**: ⚠️ **Broken/Experimental**
The project has several critical hardcoded values and security flaws that prevent it from being a production-ready or even a multi-user system in its current state.

---

## 2. System Architecture

### Backend: FastAPI & AI Brain
- **Core Framework**: FastAPI (Python)
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **AI Libraries**: 
    - `DeepFace`: Used for face verification and anti-spoofing (liveness check).
    - `VGG-Face`: The specific AI model used for identity matching.
- **Logic**:
    - **Verification Loop**: Scanned Code -> Liveness Check -> Face Match -> DB Log.
    - **Security**: Uses Supabase Service Role key (bypasses RLS).

### Frontend: React (Single App)
- **Tech Stack**: React 19, `html5-qrcode` (Scanner), `qrcode.react` (Generator).
- **Structure**:
    - `Student.js`: Handles QR scanning and selfie capture with a countdown timer.
    - `Teacher.js`: Handles QR generation and manual overrides.

---

## 3. Endpoint Analysis (API Documentation)

| Method | Endpoint | Description | Payload |
| :--- | :--- | :--- | :--- |
| `GET` | `/generate_code` | Generates a new `CLASS_VERIFY_XXXXXX` code and updates Supabase. | None |
| `POST` | `/manual_override` | Force marks a student as present, bypassing AI checks. | `student_id` (Form Data) |
| `POST` | `/verify` | The core "Anti-Cheat" engine. Performs liveness and identity check. | `secret_code` (String), `photo` (File) |

---

## 4. Functional Walkthrough

### Student Workflow
1. **Scan**: Student scans the QR code from the teacher's screen.
2. **Timer**: A 10-second countdown starts immediately after a successful scan.
3. **Capture**: Student must take a selfie before the timer hits zero.
4. **Verification**: The photo and code are sent to the backend.
5. **Result**: Backend returns "Present" or "Rejected" (Fake Photo / Mismatch).

### Teacher Workflow
1. **Dashboard**: Displays a dynamic QR code that refreshes periodically.
2. **Manual Entry**: Allows the teacher to input a Student ID to manually mark them present.

---

## 5. Critical Issues & "Broken" Elements

### 🛑 Security Vulnerabilities
1. **Exposed Credentials**: The `SUPABASE_KEY` (Service Role Key) is hardcoded in `main.py`. This gives anyone full access to the database, bypassing all security rules.
2. **No Authentication**: The API endpoints are open (`allow_origins=["*"]`) and do not require user tokens.

### 🛠️ Hardcoded Logic (Primary Reason for "Broken" state)
1. **Fixed Student ID**: In `main.py`, the system **only** verifies student ID `101`. It fetches the reference photo for ID `101` and logs attendance for ID `101`, regardless of who is actually scanning.
2. **Missing Frontend ID**: The student-side frontend does not have a field to enter a Student ID or a login system to identify the user.
3. **Concurrency Bug**: The backend saves files as `temp_selfie.jpg` and `temp_ref.jpg`. If two students verify at the same time, their photos will overwrite each other, causing "Face Mismatch" errors or incorrect logs.

### 📂 Structural Issues
1. **Empty Directories**: `student-side/` and `teacher-side/` folders at the root are empty. The actual code is inside `frontend/src/`.
2. **URL Hardcoding**: Frontend fetches from `localhost:8000`, making it difficult to deploy without code changes.

---

## 6. Recommendations for Fixing
1. **Implement Auth**: Use Supabase Auth to identify the student scanning.
2. **Dynamic ID**: Modify `/verify` to accept a `student_id` and fetch the corresponding `photo_url`.
3. **Unique File Handling**: Use UUIDs or timestamps for temporary image filenames to support multiple users.
4. **Environment Variables**: Move keys and URLs to `.env` files.
5. **Consolidate Structure**: Move the frontend logic into the designated `student-side` and `teacher-side` folders or clean up the root directory.

---

## 7. Database Schema (Inferred)
Based on the code, the following Supabase tables are required:
- `Students`: `id` (int), `photo_url` (text)
- `active_sessions`: `secret_code` (text)
- `attendance_logs`: `student_id` (int), `secret_code` (text), `status` (text), `timestamp` (auto)
