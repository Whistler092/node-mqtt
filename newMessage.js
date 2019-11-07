var mqtt = require("mqtt");


const url = "mqtt://0.0.0.0";
const options = { clientId: "mqttjs01" };
var client = mqtt.connect(url, options);
console.log("connecting...");

client.on("connect", function () {
    console.log("connected...");
    
    client.publish("testtopic", "Holaaaaa!!")
});

