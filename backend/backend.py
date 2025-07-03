from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the separate scaler and model
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Extract and convert to float
        area_income = float(data['area_income'])
        area_house_age = float(data['area_house_age'])
        area_avg_rooms = float(data['area_avg_rooms'])
        area_population = float(data['area_population'])
        

        # Prepare input array
        input_data = np.array([[area_income, area_house_age, area_avg_rooms, area_population]])

        # ✅ Apply scaling here using transform()
        scaled_input = scaler.transform(input_data)

        # Predict using scaled input
        prediction = model.predict(scaled_input)

        return jsonify({'prediction': round(prediction[0], 2)})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
