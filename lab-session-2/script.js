var container = document.getElementById("container");
var question = document.getElementById("question");
var option1  = document.getElementById("option1");
var option2  = document.getElementById("option2");
var option3  = document.getElementById("option3");
var option4  = document.getElementById("option4");
var result   = document.getElementById("result");
// var score    = document.getElementById("score");

//Array first index is "0"
var currQuestion = 0;
var score = 0;
var totalQuestions = questions.length ;

//(loading) or (setting) the question and option.
function loadQuestion(index){
    var data = questions[index];
    //question
    question.textContent = (index + 1) + "." + data.question;
    //option
    option1.textContent = data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;
    //deselect the radio button..
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if(selectedOption) selectedOption.checked = false;
    var info = document.getElementById("info");
    info.textContent = "Question"  + " " +(index + 1) + " of "  + questions.length;
};
function loadNextQuestion(){
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if(!selectedOption){
        alert("please select some option !!");
        return;
    }
    if(questions[currQuestion].answer == selectedOption.value){
        score += 10;
    }
    selectedOption.checked = false;

    currQuestion++;
    if(currQuestion == totalQuestions - 1){
        document.getElementById("nextQuestion").textContent = "finish";
    }
    if(currQuestion == totalQuestions){
        container.style.display = 'none';
        result.style.display = '';
        document.getElementById('score').textContent = "Your score is : "  + score + "/" + questions.length * 10;
        return;
    }
    loadQuestion(currQuestion);
};
    function restartGame(){
        score = 0;
        currQuestion = 0;
        container.style.display = "";
        result.style.display = "none";
        document.getElementById("nextQuestion").textContent = "Next Question";
        loadQuestion(currQuestion);
    };
loadQuestion(currQuestion);