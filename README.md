# Chatbot BE
## Requirement
- NodeJS v14 
- Npm/Yarn
- Docker (Optional)
## References
https://github.com/AdamSEY/bard-unofficial-api
## Installation
Install package requirement
```sh
yarn
```
Setup Bard Authentication
Go to https://bard.google.com/
- F12 for console
- Copy the values
  - Session: Go to Application → Cookies → `__Secure-1PSID`. Copy the value of that cookie.
Update env file
```sh
cp "SESSION_ID={{YOUR_SESSION}}" > .env
```
Run Application
With docker
```sh
docker-compose up -d --build
```
The api will serve at
```sh
http://locahost:3002
```



## Online server
If you have some error when start this app, you can use my server
```sh
https://chatbot.husa.online/api
```
