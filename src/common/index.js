export function onSocketMessage(socket, message) {
    console.log(message.toString('utf8'));
    socket.send(message.toString('utf8'))
}

export function onSocketClose() {
    console.log("disconnected to Browser 🙅🏻‍♂️");
}
