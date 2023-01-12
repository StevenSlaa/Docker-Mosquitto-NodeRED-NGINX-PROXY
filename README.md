## Docker-Mosquitto-NodeRED-NGINX-PROXY

This is a repository for setting up a Docker environment with a Mosquitto Broker, Node-RED, NGINX and a proxy.

# Services

## Node-RED

This is a Low-code programming application for event-driven applications. On top of Node-RED the container uses a [Node-RED Dashboard](https://github.com/node-red/node-red-dashboard) this is automaticly installed. This container provides a set of nodes in Node-RED to quickly create a live data dashboard. for information on how this works, please refer to the [offical documentation page](https://flows.nodered.org/node/node-red-dashboard) of this module.

## Message Queuing Telemetry Transport (MQTT)

MQTT is a lightweight, publish-subscribe, machine to machine network protocol used for communicating between devices. MQTT is TCP. This means that an MQTT packet is ensured that is is received by the receiving service (broker). In this environment there is an MQTT broker running. Node-RED can listen on specified topics where information is published.

## Proxy (NGINX-Proxy)

This is a reverse proxy server that sits infront of all the other services running on the device. the server forwards the client to a specified destinion. In this case the proxy is used to create nicer looking urls like `ui.localhost` and `nodered.localhost`. This makes it for the user much more usable instead of going to specific ports.

## Dashboard UI

This is for now a simple dashboard where users can navigate between Node-RED and the Node-RED Dashboard. In the future this can serve more purposes, but for now its basicly a gateway to the available services.

# Development / Deployment

In this repository the main-node services can be deployed locally on your machine. 

## Prerequisites

* Docker

* Git

## Clone Repository

```shell
git clone https://github.com/StevenSlaa/Docker-Mosquitto-NodeRED-NGINX-PROXY.git
```

Navigate to the correct directory

```shell
cd /Docker-Mosquitto-NodeRED-NGINX-PROXY
```

## Run the docker compose

```sh
docker compose up -d
```

After this, you can access the containers by going to the following urls:

- Node-RED [http://nodered.localhost/](http://nodered.localhost/)

- NGINX (Dashboard) [http://ui.localhost](https://ui.localhost/)