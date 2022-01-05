// frontend server socket connection
const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener("open", handleOpen);
socket.addEventListener("message", handleMessage);
socket.addEventListener("close", handleClose);

messageForm.addEventListener("submit", handleSubmit);
// 프론트에서 서버로 보내기
// setTimeout(() => {
//     socket.send("hello from the browser");
// }, 10000);
