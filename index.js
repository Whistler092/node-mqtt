var mqtt = require("mqtt");


const url = "mqtt://0.0.0.0";
const options = { clientId: "mqttjs01" };
var client = mqtt.connect(url, options);

//handle incoming messages
client.on('message', function (topic, message, packet) {
    console.log("message is " + message);
    console.log("topic is " + topic);
});


client.on("connect", function () {
    console.log("connected  " + client.connected);


    var topic_list = ["topic2", "topic3", "topic4"];
    client.subscribe(topic_list, { qos: 1 }); //topic list
    /* 
        var topic = "message";
        var msg = "test message";
        var options = {
            retain: true,
            qos: 1
        };
        client.publish(topic, msg, options); */
})
