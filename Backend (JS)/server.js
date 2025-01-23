const express = require('express');
const phidget22 = require('phidget22');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const conn = new phidget22.NetworkConnection(5661, 'localhost');
let joystickX = new phidget22.VoltageRatioInput();
joystickX.setChannel(0);

let joystickY = new phidget22.VoltageRatioInput();
joystickY.setChannel(1);

let joystickValues = { x: 0, y: 0 };

conn.connect()
    .then(() => {
        console.log('Connected to Phidget server');
        return Promise.all([joystickX.open(5000), joystickY.open(5000)]);
    })
    .then(() => {
        console.log('Joystick channels opened');
        joystickX.onVoltageRatioChange = (value) => {
            joystickValues.x = value;
        };
        joystickY.onVoltageRatioChange = (value) => {
            joystickValues.y = value;
        };
    })
    .catch((err) => {
        console.error('Error during Phidget connection:', err);
    });

app.get('/api/joystick', (req, res) => {
    res.json(joystickValues);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
