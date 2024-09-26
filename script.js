const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        addMessage(userMessage, 'user');
        userInput.value = '';
        botResponse(userMessage);
    }
});

function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = type === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function botResponse(message) {
    // Simulação de respostas do bot
    let response;
    if (message.includes('filmes')) {
        response = 'Aqui estão algumas recomendações: Inception, Mad Max, John Wick.';
    } else if (message.includes('ajuda')) {
        response = 'Você precisa de ajuda com sua conta?';
    } else {
        response = 'Desculpe, não entendi. Pode reformular?';
    }
    
    setTimeout(() => {
        addMessage(response, 'bot');
    }, 1000); // Responde após 1 segundo
}