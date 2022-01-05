# Zoom Websocket Documents

> WebRTC와 WebSocket을 영상을 통해 학습하고 간단히 구현해본 프로젝트입니다.


## Used Skill

---

### Language

- JavaScript
- HTML
- CSS

### Package

- Babel

- Nodemon

- Npm



## Server Setting Guide

---

**node -version 14.17.3** 이상 권장

### 디렉토리 생성

- `$ mkdir zoom`
- `$ cd zoom`

### npm init

- `$ npm init -y`
- `wrote to package.json`

### 프로젝트 구성

- 리드미 파일 생성
  - `$ touch README.md`
- nodemon 설치 (option D -> dev)
  - `$ npm i nodemon -D`
- 서버 파일 생성
  - babel.config.json
  - nodemon.json
  - src/server.js
- git init
  - `$ git init . `
- babel 설치
  - `$ npm i @babel/core @babel/cli @babel/node -D @babel/preset-env -D`
- git ignore 설정
  - `$ touch .gitignore`
    - /node_modules 작성

### nodemon 설정

```json
{
  "exec": "babel-node src/server.js"
}
```

### babel.config 설정

```json
{
  "presets": ["@babel/preset-env"]
}
```

### package.json 커스텀 추가

```json
{
"scripts": {
    "dev": "nodemon"
  }
}
```

### express, pug 설치

- `$ npm i express`
- `$ npm i pug`

### ws (Node.js Websocket Library) 설치
- `$ npm i ws`

### server.js 설정

```javascript
import express from "express";
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const handleConnection =(socket) => {
  console.log(socket);
}

wss.on("connection", handleConnection);
server.listen(3000, handleListen);

```

### app.js 설정
```javascript
const socket = new WebSocket(`ws://${window.location.host}`);
```