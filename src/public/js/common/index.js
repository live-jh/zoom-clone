function handleOpen() {
    console.log("Connected to Server 🙆🏻‍♂️");
}

function handleMessage(message) {
    console.log("new messages -> ", message.data);
}

function handleClose() {
    console.log("Disconnected to Server 🙅🏻♂️");
}

function handleSubmit(e) {
    e.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = "";
}
