# ⚡ PlugNgox - Electric Vehicle Recharge Bunk

PlugNgox is a full-stack web application designed to provide **real-time EV charging station booking and management**.  
It helps **users** find nearby charging stations, check availability, and book slots, while **admins (station owners)** can register and manage their stations efficiently.

---

## 🚀 Features

### 👤 User Side
- Secure user registration & login
- Search and view nearby charging stations
- Check **real-time slot availability**
- Book slots with a preview before payment
- Interactive map UI with **Mapbox + Leaflet**

### 🛠️ Admin Side
- Add, Edit, Delete charging stations
- Manage available/total slots
- Flash messages for smooth UI feedback
- View station energy usage and stats
- Real-time updates for station status
- Payment gateway integration


---

## 🏗️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, EJS Templates  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Maps:** Mapbox Geocoding API + Leaflet.js  
- **Validation & Error Handling:** Joi + Express Middleware  

---

## 📂 Project Structure

PlugNgox/
│-- models/ # MongoDB Schemas
│-- routes/ # Express routes
│-- views/ # EJS Templates
│-- public/ # Static files (CSS, JS, Images)
│-- app.js # Main server file
│-- package.json
│-- README.md

yaml
Copy code

---

## ⚡ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/Amit-dev-lab/PlugNGoX.git
   cd PlugNGoX
Install dependencies:

bash
Copy code
npm install
Create .env file in root and add:

init
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
Run the app:

bash
Copy code
npm start 
nodemon app.js
Visit: http://localhost:3000/home


📌 Future Scope

Real-time slot updates with WebSockets

Advanced analytics for admins

Mobile app support

👨‍💻 Author
Amit Bangde
CSE - AIML | Full Stack Developer | AI Enthusiast
