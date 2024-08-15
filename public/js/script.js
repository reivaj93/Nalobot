var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = { message: "" };

var arrayOfPossibleMessage = [
    { message: "hi", response: "hello" },
    { message: "who are you", response: "I'm an efficient cyberchihuahua assistant, ready to help with some of your needs." },
    { message: "what is your name", response: "I'm Nalobot, the cyber counterpart of my sister Nala" },
    { message: "Are you a dog", response: "Not exactly, eventhough I look like a dog, I'm a virtual assistant" },
    { message: "Which topics do you know", response: "For now my current knowledge is mostly about me, I'm still learning" },
    { message: "What time is it", response: "I don't know, you tell me" },
    { message: "Do you speak spanish", response: "Un poquito, pero ya que agarre confianza podemos hablar en español" },
    { message: "Sabes otros idiomas", response: "Me encuentro en proceso de aprendizaje por ahora solo ingles y español" },
    { message: "Which is you favorite food", response: "I'm a chihuhua, but a virtual hence I can't eat, but I want unos tacos" },
    { message: "Thank you", response: "My pleassure, if you need something else, reach me out here" },
];

function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    messageElement.innerHTML = "<span>You: </span><span>" + userMessage + "</span>";

    chatContainer.appendChild(messageElement);
}

function nalobotResponse(userMessage) {
    var nalobotmessage = "Currently I don't understand, I'm still learning"; // Mensaje predeterminado

    // Convertir el mensaje del usuario a minúsculas para una comparación insensible a mayúsculas
    var normalizedUserMessage = userMessage.toLowerCase();

    // Buscar la respuesta correspondiente en el array usando coincidencia parcial
    var result = arrayOfPossibleMessage.find(val => normalizedUserMessage.includes(val.message.toLowerCase()));

    // Si se encuentra una coincidencia parcial, usar la respuesta correspondiente
    if (result) {
        nalobotmessage = result.response;
    }

    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Nalobot: </span><span>" + nalobotmessage + "</span>";
    chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener('click', function(e) {
    var userMessage = textbox.value;

    if (userMessage === "") {
        alert('Please introduce some question');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        nalobotResponse(userMessageText);
    }
});
