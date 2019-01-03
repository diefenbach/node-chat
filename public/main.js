const form = document.getElementsByTagName("form")[0];
const message = document.getElementById("message");
const messages = document.getElementById("messages")
const socket = io();

form.addEventListener("submit", event => {
    event.preventDefault();
    socket.emit("chat message", message.value);
    message.value = "";
});

socket.on("chat message", function(msg) {
    const li = document.createElement('li');
    const text = document.createTextNode(msg);
    li.appendChild(text);
    messages.appendChild(li);
});
