# 🌐 Portfolio Website – Bablu Kumar

![Portfolio Preview](https://via.placeholder.com/1000x400?text=Portfolio+Preview)

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-blue)](#)  
[![GitHub Repo](https://img.shields.io/badge/-Source%20Code-black?logo=github)](https://github.com/bablukup/Portfolio)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📌 Overview

This is my personal **portfolio website**, designed to showcase my:

- 💻 **Full-Stack Development skills**
- 📂 **Projects & Experience**
- 📬 **Contact options for collaboration**

👉 Currently, the website does **not have a backend**.  
All portfolio data is loaded from a local JSON file:

```

config/portfolio.json

```

✨ The website is **fully responsive**, supports **dark/light themes**, and includes **smooth animations** for a polished experience.

---

## 🎨 Features

- Responsive design with **Tailwind CSS**
- **Dark/Light mode** with system preference detection
- **Animations & transitions** powered by Framer Motion
- Data dynamically rendered from `portfolio.json`
- Modular, reusable, and accessible components

---

## 📂 Project Structure

```

├── public/
│   ├── index.html
├── src/
│   ├── App.tsx
│   ├── components/
│   ├── styles/
├── config/
│   ├── portfolio.json   # Main data source
├── package.json
├── README.md

```

---

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/bablukup/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📦 Usage

- Update `config/portfolio.json` to change portfolio details
- Website automatically reflects updated data

**Example JSON structure:**

```json
{
  "name": "Bablu Kumar",
  "role": "Full-Stack Developer",
  "about": "Passionate developer building scalable web apps.",
  "skills": ["JavaScript", "React", "Node.js", "TypeScript"],
  "projects": [
    {
      "title": "RentMyRoam",
      "description": "Airbnb-inspired platform for student housing.",
      "link": "https://rentmyroam.onrender.com/listings"
    }
  ],
  "contact": {
    "email": "bk596572@gmail.com",
    "linkedin": "https://linkedin.com/in/bablukup",
    "github": "https://github.com/bablukup"
  }
}
```

---

## 🔮 Future Plans

- Add backend with **Node.js + Express + Database**
- Fetch portfolio data dynamically via API
- Admin dashboard for updating portfolio

---

📄 **License**
This project is licensed under the MIT License.

📬 **Contact**
For collaborations or opportunities:

- 📧 Email: [bk596572@gmail.com](mailto:bk596572@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/bablukup)
- 🐙 [GitHub](https://github.com/bablukup)

---

> Built with ❤️ and ☕ by Bablu Kumar
