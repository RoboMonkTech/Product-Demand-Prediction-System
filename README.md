 # 📦 Product Demand Prediction System

A web-based Product Demand Prediction System developed using Machine Learning concepts and deployed as an interactive web application. The machine learning model was developed in Google Colab using the Random Forest Classifier, while the web application demonstrates product demand prediction based on retail business data.

---

# 📌 Project Objective

The objective of this project is to predict the demand category of retail products using historical sales and product information. The system helps retailers identify high-demand products, optimize inventory management, and improve business decision-making.

---

# 📂 Dataset Information

**Dataset Name:** Product Demand Prediction Dataset

**Dataset Type:** CSV

**Domain:** Retail Artificial Intelligence

The dataset contains product-related information such as:

- Product Category
- Product Price
- Stock Available
- Previous Month Sales
- Customer Rating
- Product Demand Category (Target Variable)

---

# ⚙️ Machine Learning Workflow

The machine learning model was developed using the following steps:

1. Import Required Libraries
2. Load the Dataset
3. Explore the Dataset
4. Handle Missing Values
5. Encode Categorical Features
6. Split Dataset into Training and Testing Sets
7. Train the Random Forest Classifier
8. Predict Product Demand Category
9. Evaluate Model Performance
10. Test the Model with New Product Data

---

# 🤖 Algorithm Used

**Random Forest Classifier**

Random Forest is a supervised machine learning algorithm that combines multiple decision trees to improve prediction accuracy and reduce overfitting. It is widely used for classification tasks and performs well on retail prediction problems.

---

# 🌐 Web Application

The web application provides an interactive dashboard where users can enter product details and receive an instant prediction of product demand.

### Features

- Retail AI Dashboard
- Product Information Form
- Product Demand Prediction
- Confidence Percentage
- Demand Category
- Responsive Design

---

# 📊 Technologies Used

## Machine Learning

- Python
- Google Colab
- Pandas
- NumPy
- Matplotlib
- Scikit-learn

## Web Development

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Deployment

- GitHub
- Vercel

---

# 📝 Input Parameters

The web application accepts the following inputs:

- Product Name
- Product Category
- Product Price
- Stock Available
- Previous Month Sales
- Customer Rating

---

# 🧠 Prediction Logic (Web Demo)

The current web application demonstrates product demand prediction using the following rules:

- Previous Month Sales ≥ 500
- Customer Rating ≥ 4
- Stock Available ≥ 100
- Product Price ≤ ₹5000

If these conditions are satisfied, the application predicts **High Demand Product**. Otherwise, it predicts **Low Demand Product**.

---

# 📈 Prediction Output

The application displays:

- High Demand Product / Low Demand Product
- Confidence Percentage
- Demand Category
- Product Recommendation Message

---

# 📂 Project Structure

```
Product-Demand-Prediction-System/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── Product_Demand.ipynb
├── train.csv
└── screenshots/
```

---

# 📷 Screenshots

Include screenshots of:

- Home Page
- Product Information Form
- High Demand Product Result
- Low Demand Product Result
- Google Colab Output

---

# 🌐 Live Demo

Replace the following URL with your Vercel deployment link:

https://product-demand-prediction-system.vercel.app/


---

# 🚀 Future Enhancements

- Integrate the trained Machine Learning model with the web application.
- Develop a backend using Flask or FastAPI.
- Store product information in a database.
- Add user authentication.
- Build a retail inventory analytics dashboard.
- Generate product demand reports.

---

⭐ This project demonstrates the implementation of a Product Demand Prediction System using Machine Learning concepts together with an interactive web interface.
