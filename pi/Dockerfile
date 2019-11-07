# Python Base Image from https://hub.docker.com/r/arm32v7/python/
FROM arm32v7/python:2.7.13-jessie
RUN apt-get update
RUN apt-get install -y python-smbus i2c-tools
# Copy the Python Script to blink LED
COPY led_blinker.py ./
COPY lcd_i2c.py ./

# Intall the rpi.gpio python module
RUN pip install --no-cache-dir rpi.gpio
RUN pip install smbus2


# Trigger Python script
CMD ["python", "./lcd_i2c.py"]