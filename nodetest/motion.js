const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {

  // Create a new `motion` hardware instance.
  var motion = new five.Motion('P1-7'); /*17 - 11 */
  var led = new five.Led('P1-11');


  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function(e) {
    console.log("calibrated", e);
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function(e) {
    console.log("motionstart", e);
    led.blink(0);
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function(e) {
    console.log("motionend", e);

    led.blink(1000);

  });
});
