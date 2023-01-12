---
icon: broadcast
category: [Services, MQTT]
author:
    name: Steven Slaa
    avatar: https://media.licdn.com/dms/image/C4D03AQF8u45LPyfFoA/profile-displayphoto-shrink_200_200/0/1580729932317?e=1678320000&v=beta&t=aa7C7oyzi5KPV7doGUoyAwk2Bdw7Zxn2q6XFT8Sm7AY
---

## Message Queuing Telemetry Transport (MQTT)

MQTT is a lightweight, publish-subscribe, machine to machine network protocol 
used for communicating between devices. MQTT is TCP. 
This means that an MQTT packet is ensured that it is received by the 
receiving service (broker). In this environment there is an MQTT broker running. 
Node-RED can listen on specified topics where information is published.
What's also enabled is MQTT over websockets this way, you can use [MQTT.js](https://github.com/mqttjs/MQTT.js) and implement it inside of your web-apps.

## Accessibility

You can access the MQTT-Broker via the following urls:

### Default (Port 1883)
- Via docker container name : [Mosquitto-Broker:1883](Mosquitto-Broker:1883)
- Via localhost: [localhost:1883](localhost:1883)

### Websockets (Port 1884)
- Via docker container name : [Mosquitto-Broker:1884](Mosquitto-Broker:1884)
- Via localhost: [localhost:1884](localhost:1884)

