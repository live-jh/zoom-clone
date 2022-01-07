export function onSocketMessage(socket_user, sockets, message) {
    console.log("[server log] client messages data: ", message.toString('utf8'));
    const msg_obj = JSON.parse(message);
    switch (msg_obj.type) {
        case "new_message":
            sockets.forEach((aSockect) => aSockect.send(`[${socket_user.nickname}]: ${msg_obj.payload}`));
        case "nickname":
            // nickname을 payload에 넣어줘야함
            socket_user['nickname'] = msg_obj.payload;
    }
}

export function onSocketClose() {
    console.log("disconnected to Browser 🙅🏻‍♂️");
}
