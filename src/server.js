import express from "express";
import http from "http";
import WebSocket from "ws";
import {onSocketClose, onSocketMessage} from "./common"

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); // static file setting
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

// http 서버 위에 ws 서버올려서 함께 돌리기 (express는 ws를 지원 x)
// http 서버가 필요한 이유는 views, static fiels, home, redirect를 지원해야하기 때문
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const sockets = []; // 빈 리스트

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "anonymous";
    console.log(socket)
    console.log("connected to Browser ✔");
    socket.on("close", () => (console.log("disconnected to Browser 𝘟")));
    socket.on("message", (message) => onSocketMessage(socket, sockets, message));
});
server.listen(3000, handleListen);