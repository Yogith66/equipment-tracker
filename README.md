# Equipment Tracker

A simple full-stack web application to manage equipment records.  
This project was built as part of an intern take-home assignment to demonstrate frontend, backend, and basic database concepts.

---

## 🚀 Features

- View a list of equipment in a table
- Add new equipment
- Edit existing equipment
- Delete equipment
- Search equipment by name
- Simple and clean UI

---

## 🛠 Tech Stack

**Frontend**
- React
- Axios
- HTML, CSS (inline styling)

**Backend**
- Node.js
- Express.js

**Database**
- JSON file (used for simplicity)

---

## 📁 Project Structure

equipment-tracker
├── backend
│ ├── data
│ │ └── equipment.json
│ ├── routes
│ │ └── equipmentRoutes.js
│ └── server.js
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── EquipmentForm.js
│ │ │ └── EquipmentTable.js
│ │ └── App.js
│ └── package.json
│
└── README.md


---

## ▶️ How to Run the Project Locally


### 1️⃣ Backend Setup

Open terminal :
     
                cd backend
     
                npm install

                node server.js

Backend will run on:
  http://localhost:5000

### 2️⃣ Frontend Setup

Open a new terminal:

                   cd frontend

                   npm install

                   npm start

Frontend will run on:
http://localhost:3000
(or 3001 if port 3000 is busy)


🧪 Sample Equipment Data

* You can add sample entries such as:

* Mixer A1 – Mixer – Active

* Storage Tank B2 – Tank – Under Maintenance

* Vessel V-100 – Vessel – Active

* Packaging Machine M5 – Machine – Inactive

📌 Assumptions

* JSON file is used instead of a database to keep the project simple.

* No authentication is implemented as it was not required.

* UI design is kept minimal to focus on functionality.

🔮 Improvements (If I Had More Time)

* Use a real database (MySQL / MongoDB)

* Add authentication and authorization

* Improve UI styling and responsiveness

* Add form validations and error messages

👨‍💻 Author

Built by [Yogith N] as part of an intern assignment.



