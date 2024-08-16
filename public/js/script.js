var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    messageElement.innerHTML = "<span>You: </span><span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);
}

function nalobotResponse(userMessage) {
    fetch(`/api/bot?message=${encodeURIComponent(userMessage)}`)
        .then(response => response.json())
        .then(data => {
            var nalobotmessage = data.response || "Currently I don't understand, I'm still learning";

            var messageElement = document.createElement('div');
            messageElement.style.textAlign = "left";
            messageElement.style.margin = "10px";
            messageElement.innerHTML = "<span>Nalobot: </span><span>" + nalobotmessage + "</span>";
            chatContainer.appendChild(messageElement);
        })
        .catch(error => {
            console.error('Error al obtener la respuesta del bot:', error);
            var messageElement = document.createElement('div');
            messageElement.style.textAlign = "left";
            messageElement.style.margin = "10px";
            messageElement.innerHTML = "<span>Nalobot: </span><span>Error al obtener la respuesta</span>";
            chatContainer.appendChild(messageElement);
        });
}



function handleSend() {
    var userMessage = textbox.value;

    if (userMessage === "") {
        alert('Please introduce some question');
    } else {
        let userMessageText = userMessage.trim();
        textbox.value = "";

        sendMessage(userMessageText);
        nalobotResponse(userMessageText);
    }
}

sendBtn.addEventListener('click', handleSend);

textbox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        handleSend();
    }
});
