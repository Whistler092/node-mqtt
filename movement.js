/* 
 * Using a PIR motion sensor with Pi 
 * 
 */

var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({io: new raspi()});

// Initializing PubNub
var channel = 'motionsensor';
/*var pubnub = require('pubnub').init({
	publish_key: 'pub-c-de0e73a9-f38d-4269-9ddb-12c089056bd0',
	subscribe_key: 'sub-c-e128b3d0-f456-11e8-b4b3-36001c7c3431'
});*/

board.on('ready', function() {
	console.log('board is ready');

	// Create a new `motion` hardware instance.
	var motion = new five.IR.Motion('P1-11'); //pin 7 (GPIO 4)

	// 'calibrated' occurs once, at the beginning of a session,
	motion.on('calibrated', function() {
		console.log('calibrated');
	});

	// 'motionstart' events are fired when the 'calibrated'
	// proximal area is disrupted, generally by some form of movement
	motion.on('motionstart', function() {
		console.log('motionstart', m);
		/*pubnub.publish({
			channel: channel,
			message: 'Motion detected',
			callback: function(m) {console.log(m);}
		});*/
	});

	// 'motionend' events are fired following a 'motionstart' event
	// when no movement has occurred in X ms
	motion.on('motionend', function() {
		console.log('motionend');
	});
});