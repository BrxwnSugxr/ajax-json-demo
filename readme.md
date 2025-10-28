![Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML](https://img.shields.io/badge/HTML-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![JSON](https://img.shields.io/badge/JSON-orange)

# AJAX JSON Demo


This project demonstrates how to use **AJAX (XMLHttpRequest)** in JavaScript to fetch and display data from a **JSON file** without reloading the page. It includes simple examples to show how to request, parse, and render JSON data dynamically on a webpage.
---


##  🚀 Live Demo
👉 [Try it on GitHub Pages](https://brxwnsugxr.github.io/ajax-json-demo/)
---


## 📁 Project Structure

/ajax-json-demo
│
├── sample.html # AJAX sample page
├── question1.html # AJAX call fetching data from faculty.json
├── question2.html # (optional) another AJAX example, e.g., airport.json
├── faculty.json # Example JSON data file for faculty info
├── airport.json # Example JSON data file for airport info
└── README.md # Project documentation



---

## 🧠 What You’ll Learn

- How to make an **AJAX GET request** using `XMLHttpRequest`
- How to **handle response states and errors**
- How to **parse JSON** into a JavaScript object
- How to **dynamically display JSON data** on a webpage

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open the folder in **VS Code** (or any editor).
3. Use the **Live Server** extension or another local server to run the HTML file  
   (AJAX requests don’t work from the `file://` protocol).
4. Open `question1.html` in your browser.
5. Click **“Get Faculty Details”** to fetch and display JSON data from `faculty.json`.

---

## 📄 Example JSON

**faculty.json**
```json
{
  "facultyName": "John Smith",
  "department": "Computer Science",
  "email": "john.smith@example.com"
}
