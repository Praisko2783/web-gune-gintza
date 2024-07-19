// Definir las preguntas y sus opciones
const questions = [
  {
    question: "Hauetako zein da programazio lengoaia?",
    options: ["HTML", "CSS", "Javascript"],
    correctAnswer: 2
  },
  {
    question: "Hauetako zein erabiltzen da web-orria dotoretzeko?",
    options: ["CSS", "HTML", "JavaScript"],
    correctAnswer: 0
  },
  {
    question: "Hauetako zeinekin osatu ahal dugu web-orriaren egitura?",
    options: ["CSS", "HTML", "JavaScript"],
    correctAnswer: 1
  },
  {
    question: "HTML elementu guztiak irekiera eta itxiera etiketen artean idatzi behar al dira?",
    options: ["Bai", "Ez", "Berdin dio"],
    correctAnswer: 1
  },
  {
    question: "Elementuen atributuak, non idazten dira?",
    options: ["Irekiera etiketan", "Itxiera etiketan", "Berdin dio"],
    correctAnswer: 0
  },
  {
    question: "JavaScript fitxategien luzapena zein da?",
    options: [".css", ".js", ".html"],
    correctAnswer: 1
  }
];

let currentQuestion = 0;
let score = 0;

// Obtener elementos del DOM
const questionElement = document.getElementById("galde");
const optionsElement = document.getElementById("auke");
const resultElement = document.getElementById("emaitza");

// Función para cargar la pregunta actual
function hasiLengoaiLantegia() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  // Limpiar las opciones anteriores
  optionsElement.innerHTML = "";
  resultElement.innerHTML = "";

  // Crear elementos de opción para cada opción
  for (let i = 0; i < question.options.length; i++) {
    const option = document.createElement("lengoaiaBotoia");
    option.textContent = question.options[i];
    option.value = i;
    option.onclick = selectAnswer;
    optionsElement.appendChild(option);
  }
}
// Función para verificar la respuesta seleccionada
function selectAnswer() {
  const selectedOption = parseInt(this.value);
  const question = questions[currentQuestion];

  if (selectedOption === question.correctAnswer) {
    score++;
    this.style.backgroundColor = "#00FF00;"; // Color de fondo verde para respuesta correcta
    resultElement.innerHTML= "Bikain gazte!<br>Erantzuna zuzena da.";
  } else {
    this.style.backgroundColor = "#FF0000"; // Color de fondo rojo para respuesta incorrecta
    resultElement.innerHTML= "Erantzun okerra. <br>Erantzun zuzena hauxe da: "+question.options[question.correctAnswer];
  }

  // Desactivar los botones de opción después de seleccionar una respuesta
  const options = optionsElement.getElementsByTagName("lengoaiaBotoia");
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(hasiLengoaiLantegia, 4000); // Cargar la siguiente pregunta después de 3 segundo
  } else {
    setTimeout(showResult, 4000); // Mostrar el resultado final después de 3 segundo
  }
}

// Función para mostrar el resultado final
function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  resultElement.innerHTML = `Hauxe da zure azterketaren emaitza: <br> ${questions.length} erantzun ${score} zuzen.`;
}
/*function hasiLengoaiLantegia(){
  loadQuestion();
};*/
// Cargar la primera pregunta al cargar la página

