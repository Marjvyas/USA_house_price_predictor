# 🏠 USA House Price Prediction App
A web application that predicts house prices using machine learning. Built with a Flask backend and React frontend, this app allows users to input real estate data and receive a predicted house price instantly.

## 📌 Features
- 🔢 Predicts house price using:

 - Average Area Income

 - Average Area House Age

 - Average Area Number of Rooms

 - Area Population

- 🔬 Linear Regression model with data scaled using StandardScaler

- ⚛️ React frontend for user-friendly input

- 🐍 Flask backend with REST API

- 🔄 Pickled model and scaler for fast prediction without retraining

- 🔗 CORS enabled for seamless frontend-backend communication

- 🚀 Live Demo

## 🧠 Tech Stack

| Tech             | Purpose                       |
| ---------------- | ----------------------------- |
| **Python**       | Machine Learning, API (Flask) |
| **scikit-learn** | Model training and scaling    |
| **React.js**     | Frontend UI                   |
| **Pickle**       | Model & scaler persistence    |
| **Flask-CORS**   | Cross-Origin Requests         |
| **HTML/CSS**     | Styling UI                    |


## 📁 Folder Structure
```
House-Price-Prediction/
│
├── backend/
│   ├── app.py                   # Flask backend API
│   ├── lrModel.pkl              # Trained Linear Regression model
│   ├── scaler.pkl               # StandardScaler for preprocessing
│   ├── requirements.txt         # Python dependencies
│
├── frontend/
│   └── src/
│       └── components/
│           └── Component.jsx    # React component for form & result
│
├── dataset/
│   └── USA_Housing.csv          # Training data (optional)
│
├── train_model.py               # Script for training model and scaler
├── README.md                    # This file
```
## ✅ Requirements

```
flask
flask-cors
scikit-learn
numpy
pandas
```

## ⚙️ Installation
1. Backend (Flask + ML)
```
bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
python app.py
```
install all requirements
2. Frontend (React)
```
bash
cd frontend
npm install
npm run dev  # or npm start
```


## 📊 Model Training (train_model.py)

- Uses StandardScaler to preprocess input features

- Trains a LinearRegression model

- Saves both model and scaler as .pkl files

## 👨‍💻 Author
Marj Vyas
- B.E. Computer Engineering, LD College of Engineering

## 🌟 Support
If you like this project, give it a ⭐ on GitHub!
