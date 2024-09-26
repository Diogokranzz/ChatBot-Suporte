const socket = io();
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageList = document.querySelector('.message-list');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.emit('message', message);
    messageInput.value = '';
  }
});

socket.on('message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `<span>${message}</span>`;
  messageList.appendChild(messageElement);
});