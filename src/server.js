import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // static file setting
app.get("/", (_, res) => res.render("home"));
// 모든 url 다 home으로 redirect
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");
// app.listen(3000, handleListen);



// http 서버 위에 ws 서버올려서 함께 돌리기 (express는 ws를 지원 x)
// http 서버가 필요한 이유는 views, static fiels, home, redirect를 지원해야하기 때문
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const handleConnection =(socket) => {
    console.log(socket)
}

wss.on("connection", handleConnection);
server.listen(3000, handleListen);