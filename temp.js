const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {

    var temperature = new five.Thermometer({
      pin: "29"
    });
  
    temperature.on("data", function() {
      console.log("celsius: %d", this.C);
      console.log("fahrenheit: %d", this.F);
      console.log("kelvin: %d", this.K);
    });
  });