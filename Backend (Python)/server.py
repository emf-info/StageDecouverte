from flask import Flask, jsonify
from flask_cors import CORS
from flask import Flask
from Phidget22.Devices.VoltageRatioInput import VoltageRatioInput
from Phidget22.Devices.TemperatureSensor import TemperatureSensor
from Phidget22.Net import enableServerDiscovery, ServerType
#from phidget22.Phidget import *
#from phidget22.Devices.VoltageRatioInput import VoltageRatioInput

app = Flask(__name__)
CORS(app)

# Configuration des variables globales pour les valeurs du joystick
joystick_values = {"x": 0, "y": 0}

# Initialisation des canaux Phidgets
joystick_x = VoltageRatioInput()
joystick_x.setChannel(0)

joystick_y = VoltageRatioInput()
joystick_y.setChannel(1)

# Callback pour l'axe X
def on_voltage_ratio_change_x(self, voltage_ratio):
    joystick_values["x"] = voltage_ratio

# Callback pour l'axe Y
def on_voltage_ratio_change_y(self, voltage_ratio):
    joystick_values["y"] = voltage_ratio

# Configuration des callbacks
joystick_x.setOnVoltageRatioChangeHandler(on_voltage_ratio_change_x)
joystick_y.setOnVoltageRatioChangeHandler(on_voltage_ratio_change_y)

# Connexion au serveur Phidget
try:
    joystick_x.openWaitForAttachment(5000)
    joystick_y.openWaitForAttachment(5000)
    print("Phidget joystick connected.")
except Exception as e:
    print(f"Error connecting to Phidget joystick: {e}")

# Endpoint API pour récupérer les valeurs du joystick
@app.route('/api/joystick', methods=['GET'])
def get_joystick_values():
    return jsonify(joystick_values)

# Lancer le serveur
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
