const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);

        // Show own message aligned right
        addMessage(input.value, 'self');
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    addMessage(msg);
});

function addMessage(message, type = '') {
    const item = document.createElement('li');
    item.textContent = message;
    if (type) item.classList.add(type);
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}
