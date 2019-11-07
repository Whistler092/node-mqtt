import paho.mqtt.publish as publish
import time
print("Sending 1...")
publish.single("ledStatus", "1", hostname="192.168.0.17")
