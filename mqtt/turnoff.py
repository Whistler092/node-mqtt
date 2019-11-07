import paho.mqtt.publish as publish
import time
print("Sending 0...")
publish.single("ledStatus", "0", hostname="192.168.0.17")
