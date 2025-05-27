// chat.js
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat-btn');

let messages = [];

if (sendChatBtn) {
  sendChatBtn.onclick = () => {
    const message = chatInput.value.trim();
    if (message) {
      messages.push({ text: message, id: Date.now() });
      renderMessages();
      chatInput.value = '';
    }
  };
}

function renderMessages() {
  if (!chatMessages) return;
  chatMessages.innerHTML = messages.map(msg => `<div class="chat-message">${msg.text}</div>`).join('');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

renderMessages();
