# 🚀 Express Routing Checkpoint

![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![EJS](https://img.shields.io/badge/EJS-Template%20Engine-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)
![License](https://img.shields.io/badge/License-MIT-blue)

A professional **Express.js** web application demonstrating **routing**, **custom middleware**, **template rendering**, and **responsive styling**. The application includes three pages—**Home**, **Our Services**, and **Contact**—and restricts access based on predefined working hours.

---

# 📖 Overview

This project was developed as part of the **Express Routing Checkpoint**. Its objective is to demonstrate how to build a multi-page web application using Express while implementing custom middleware that controls access according to the current day and time.

The application is available **only during business hours**:

- 📅 Monday → Friday
- 🕘 09:00 AM → 05:00 PM

Outside these hours, users are redirected to a dedicated page informing them that the website is currently unavailable.

---

# ✨ Features

- 🏠 Home page
- 💼 Our Services page
- 📞 Contact page
- 🧭 Reusable navigation bar on every page
- 🎨 Modern responsive user interface
- 🕒 Custom Express middleware for working-hours validation
- 📂 Organized MVC-inspired project structure
- ⚡ EJS template engine with reusable partials
- 📁 Static asset management (CSS)

---

# 🛠️ Built With

- **Node.js**
- **Express.js**
- **EJS**
- **HTML5**
- **CSS3**

---

# 📁 Project Structure

```text
express-routing-checkpoint/
│
├── middleware/
│   └── workingHours.js
│
├── public/
│   └── css/
│       └── style.css
│
├── routes/
│   └── pages.js
│
├── views/
│   ├── partials/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── home.ejs
│   ├── services.ejs
│   ├── contact.ejs
│   └── closed.ejs
│
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/your-username/express-routing-checkpoint.git
```

## 2. Navigate to the project

```bash
cd express-routing-checkpoint
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

Or run the production server:

```bash
npm start
```

---

# 🚀 Usage

Open your browser and visit:

```
http://localhost:3000
```

Available routes:

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/services` | Our Services Page |
| `/contact` | Contact Page |

---

# 🕒 Working Hours Middleware

The application uses a custom middleware that checks the current server date and time before serving any page.

### Access is granted only when:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday

and

- Between **09:00 AM** and **05:00 PM**

Otherwise, the application displays a **Website Closed** page.

---

# 🎨 User Interface

The application includes:

- Responsive navigation bar
- Modern landing page
- Services cards
- Contact form
- Professional footer
- Responsive layout using CSS

---

# 📸 Screenshots

### 🏠 Home Page

---

### 💼 Our Services

---

### 📞 Contact Page

---

### 🚫 Website Closed

---

# 📚 Learning Objectives

This project demonstrates how to:

- Build an Express server
- Configure Express routing
- Create reusable route modules
- Implement custom middleware
- Restrict access based on business logic
- Render dynamic pages using EJS
- Serve static files
- Organize an Express application following best practices

---

# 🔮 Future Improvements

- Contact form validation
- Email integration with Nodemailer
- Authentication system
- Database integration
- Dark mode
- Animated transitions
- Deployment to Render or Railway

---

# 👨‍💻 Author

**Yassine Kalthoum**

Full Stack JavaScript Developer

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

# 📄 License

This project was created for educational purposes as part of the **Express Routing Checkpoint**.

Feel free to use, modify, and improve it for learning and portfolio projects.

---

## ⭐ If you found this project helpful, consider giving it a star!
