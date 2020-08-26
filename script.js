var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("hockey-questions");
var answerButtonsElement = document.getElementById("answer-buttons");
var shufflehockeyQuestions, currentQuestionIndex
var correctAnswers = 0;


var score = 0;
c = 60;




var horn = new Audio();
horn.src = "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hockey%20Horn%20Wav-4050-Free-Loops.com.mp3";

answerButtonsElement.addEventListener("click", horn);
horn = answerButtonsElement.correct
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextquestion()
})
function timer001() {
    c = c - 1;
    if (c < 60) {
        time001.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update)
        alert("times up!")
        document.getElementById("scorecard").classList.remove("hide")


    }

}

update = setInterval("timer001()", 1000)

function startGame() {
    c = 60;
    startButton.classList.add("hide");
    shufflehockeyQuestions = hockeyQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    setNextquestion()
}

function setNextquestion() {
    resetState()
    showQuestion(shufflehockeyQuestions[currentQuestionIndex]);
}

function showQuestion(hockeyQuestions) {
    questionElement.innerText = hockeyQuestions.question
    hockeyQuestions.answer.forEach(answer => {
        var buttons = document.createElement("button");
        buttons.innerText = answer.text
        buttons.classList.add("btn");
        if (answer.correct) {
            buttons.dataset.correct = answer.correct

        }

        buttons.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(buttons);

    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct;
    console.log(correct)
    if (correct === "true") {
        score++;
        document.getElementById("score001").innerText = score;
    }
    else {
        c = c - 5;
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);

    })

    nextButton.classList.remove("hide")

    if (shufflehockeyQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");

    }

    else {

        startButton.innerText = "restart"
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    } else (false); {
        element.classList.add("wrong")
    }
}


function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function gameOver() {
    if ("true" === 10) {

        c = "-";
        alert("You Won The Stanley Cup!");
        saveScore = prompt("Enter your initials")
        gameOver()
    } else if (gameOver === true) {
        alert("Times Up!")
        gameOver()
    }
}


var hockeyQuestions = [
    {
        question: "Who is the greatest hockey player of all time?",
        answer: [{
            text: "A. Jaromir Jagr", correct: false
        },
        { text: "B. Mark Messier", correct: false },
        {
            text: "C. Wayne Gretzky", correct: true
        }],

    },

    {
        question: "Who is the goalkeeper who invented the profly style?",
        answer: [{
            text: "A. Tony Esposito", correct: false
        },
        { text: "B. Patrick Roy", correct: true },
        {
            text: "C. Dominik Hasek", correct: false
        }],

    },

    {
        question: "What team has the record for most Stanley Cup wins?",
        answer: [{
            text: "A. Montreal Canadiens", correct: true
        },
        { text: "B. Detroit Red Wings", correct: false },
        {
            text: "C. Toronto Maple Leafs", correct: false
        }],

    },
    {
        question: "This expansion team made it to the cup finals in their first year?",
        answer: [{
            text: "A. St. Louis Blues", correct: false
        },
        { text: "B. Tampa Bay Lightning", correct: false },
        {
            text: "C. Las Vegas Golden Knights", correct: true
        }],

    },
    {
        question: "Which goalkeeper has the record for most wins?",
        answer: [{
            text: "A. Patrick Roy", correct: false
        },
        { text: "B. Martin Brodeur", correct: true },
        {
            text: "C. Roberto Luongo", correct: false
        }],

    },
    {
        question: "Which player holds the record for consecutive 50-goal seasons?",
        answer: [{
            text: "A. Mario Lemieux", correct: false
        },
        { text: "B. Alexander Ovechkin", correct: false },
        {
            text: "C. Mike Bossy", correct: true
        }],


    },
    {
        question: "Which player has the most Maurice Richard trophy wins?",
        answer: [{
            text: "A. Alexander Ovechkin", correct: true
        },
        { text: "B. Jerome Iginla", correct: false },
        {
            text: "C. Pavel Bure", correct: false
        }],

    },
    {
        question: "Who was the first goalkeeper to wear a face mask?",
        answer: [{
            text: "A. Terry Sawchuk", correct: false
        },
        { text: "B. Jacques Plante", correct: true },
        {
            text: "C. Nikolai Khabiboulin", correct: false
        }],

    },
    {
        question: "Which Player holds the record for most consecutive seasons played",
        answer: [{
            text: "A. Mark Messier", correct: false
        },
        { text: "B. Jaromir Jagr", correct: false },
        {
            text: "C. Gordie Howe", correct: true
        }],

    },
    {
        question: "Who is the coach that has the most wins and Stanley Cups?",
        answer: [{
            text: "A. Joel Quenneville", correct: false
        },
        { text: "B. Scotty Bowman", correct: true },
        {
            text: "C. Ken Hitchcock", correct: false
        }],

    }

];