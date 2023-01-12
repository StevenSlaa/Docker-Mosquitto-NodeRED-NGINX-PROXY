---
icon: cpu
category: [Services, Proxy]
author:
    name: Steven Slaa
    avatar: https://media.licdn.com/dms/image/C4D03AQF8u45LPyfFoA/profile-displayphoto-shrink_200_200/0/1580729932317?e=1678320000&v=beta&t=aa7C7oyzi5KPV7doGUoyAwk2Bdw7Zxn2q6XFT8Sm7AY
---

# Proxy (NGINX-Proxy)

This is a reverse proxy server that sits infront of all the other services running on the device. the server forwards the client to a specified destinion. In this case the proxy is used to create nicer looking urls like `ui.localhost` and `nodered.localhost`. This makes it for the user much more usable instead of going to specific ports.
