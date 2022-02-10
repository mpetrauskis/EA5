"use strict"

var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.getElementById("progress");
var questionNumber = 0;
var resultNumber = 0;


var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
    text: "Kam naudingi obuoliai?",
        choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
            answer: "Virškinimui"
    },
    {
    text: "Kokias ligas padeda gydyti agrastai?",
        choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
            answer: "Cukrini diabetą"
    },
    {
    text: "Kokio vitamino gausu apelsinuose?",
        choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
            answer: "Vitamino C"
    },
    {
    text: "Kokiais dalykais yra turtingi arbūzai?",
        choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
            answer: "Visi teisingi"
    }
]

var populate = () => {
    if(questionNumber < questions.length){
        question.innerText = questions[questionNumber].text;
        button.forEach((x, i) => {
        x.innerText = `${questions[questionNumber].choices[i]}`;
        });
    }else {
     showResult();
    }
}

var showProgress = () => {
    questionNumber++;
    progress.innerText = questionNumber + 1;
}

var check = guess => {
    if(guess.innerText === questions[questionNumber].answer) resultNumber++;
    console.log(resultNumber);
}

var rezultText = () => {
    if(resultNumber >= 3){
        document.getElementById("re").innerHTML = `Labai gerai!!`
    }else{
        document.getElementById("re").innerHTML = `Reikia pasidometi.`
    }
};

var showResult = () => {
    if(resultNumber > 2){
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = `<h1 class="spinny">Result  ${resultNumber} <span class="sp">Labai gerai!</span></h1>`;
    }else{var quiz = document.getElementById("quiz");
    quiz.innerHTML = `<h1 class="spinny">Result  ${resultNumber} <span class="sp">Reikia Pasistengti!</span></h1>`;
}}

button.forEach((x) => {
    x.addEventListener("click", function(){
        setTimeout(function(){
           showProgress();
           populate();
        }, 10);
        check(this);
    });
});

populate();
