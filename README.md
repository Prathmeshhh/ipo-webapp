# Bluestock IPO Web Application (Internship Project)

This project is part of my SDE Internship at Bluestock Fintech.  
It includes a full-stack web app and REST API for managing IPO data.

## 🔧 Tech Stack
- **Backend**: Node.js, Express.js, PostgreSQL
- **Frontend**: HTML, CSS, Bootstrap
- **Tools**: Postman, pgAdmin, GitHub

## ✅ Completed (Day 1 & 2)
- Project setup and folder structure
- Express server setup
- PostgreSQL database configured
- IPO table created
- Dummy data inserted
- `GET /api/ipo` API working

## 🚀 Getting Started
1. Clone repo
2. Run `npm install` inside `backend/`
3. Add your `.env` in `backend/`
4. Run `node index.js`

## 📁 Folder Structure
- `backend/`: API + DB logic
- `frontend/`: UI for IPO listings & admin

## ✅ Completed (Day 3)
- POST /api/ipo endpoint added
- Integrated multer for file uploads (logo, RHP, DRHP)
- Saved file paths to PostgreSQL database
- Tested with Postman using form-data

## ✅ Completed (Day 4)
- Implemented admin login using email and password
- Integrated JWT-based authentication using `jsonwebtoken` and `bcryptjs`
- Created `/api/login` route to issue JWT token
- Protected sensitive routes (e.g., `POST /api/ipo`) with JWT middleware
- Tested login flow and secured API access via Postman

## 🔐 How to Test Admin Login & JWT (Day 4)

1. **Login**
   - Endpoint: `POST /api/login`
   - Body (raw JSON):
     ```json
     {
       "email": "admin@bluestock.com",
       "password": "********"
     }
     ```

2. **Use JWT Token**
   - Add header: `Authorization: Bearer YOUR_TOKEN`
   - Use this in protected routes like:
     - `POST /api/ipo`
     - `PUT /api/ipo/:id`
     - `DELETE /api/ipo/:id`

## ✅ Completed (Day 5)
- Implemented `PUT /api/ipo/:id` to update IPO
- Implemented `DELETE /api/ipo/:id` to remove IPO
- Secured both routes with JWT
- Tested using Postman with Bearer tokens
