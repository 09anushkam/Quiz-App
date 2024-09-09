//selecting all required elements
const first_page=document.querySelector(".first_page");
const start_btn = document.querySelector(".start_btn");
const exit_btn = document.querySelector(".buttons .quit");

const languages=document.querySelector(".languages");
const lang_btn=document.querySelectorAll(".lang_btn");

const HTML=document.querySelector("#html");
const CSS=document.querySelector("#css");
const C=document.querySelector("#c");
const JAVA=document.querySelector("#java");
const JAVASCRIPT=document.querySelector("#javascript");
const PYTHON=document.querySelector("#python");

const levels=document.querySelector(".levels");
const level_btn=document.querySelectorAll(".level_btn");

const easy=document.querySelector("#easy");
const intermediate=document.querySelector("#intermediate");
const advanced=document.querySelector("#advanced");

const info_box = document.querySelector(".info_box");
const continue_btn = document.querySelector(".buttons .restart");

const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let selectedLanguage = ''; // Global variable for selected language
let selectedDifficulty = ''; // Global variable for selected difficulty

// if startQuiz button clicked
start_btn.onclick=()=>{
    first_page.style.display="none";
    languages.style.display="block";
}

const langheading=document.querySelector(".levels .heading .langname");
for(let anylangbtn of lang_btn){
    anylangbtn.onclick=()=>{
        selectedLanguage = anylangbtn.id.toUpperCase(); // Store selected language
        langheading.innerHTML = selectedLanguage;
        levels.style.display="block";
        languages.style.display="none";
    }
}

const levelheading=document.querySelector(".quiz_box .title");
for(let anylevelbtn of level_btn){
    anylevelbtn.onclick=()=>{
        selectedDifficulty = anylevelbtn.id; // Store selected difficulty
        levelheading.innerHTML = `Level-${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`;
        info_box.classList.add("activeInfo"); //show info box
        levels.style.display="none";
    }
}

// if exitQuiz button clicked
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    window.location.reload();
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQuestions function
    currentFilteredQuestions = questions.filter(q => q.category === selectedLanguage && q.difficulty === selectedDifficulty);
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let currentFilteredQuestions = [];
let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    result_box.classList.remove("activeResult"); //hide result box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que"); // footer - x of n Questions

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < currentFilteredQuestions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        // This means we are on the last Question
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// Modified function
function showQuestions(index) {
    let filteredQuestions = questions.filter(q => q.category === selectedLanguage && q.difficulty === selectedDifficulty);
    if (index < filteredQuestions.length) {
        const que_text = document.querySelector(".que_text");
        let question = filteredQuestions[index];
        let que_tag = `<span>${question.numb}. ${question.question}</span>`;
        let option_tag = question.options.map(option => `<div class="option"><span>${option}</span></div>`).join('');

        que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
        option_list.innerHTML = option_tag; // Adding new div tag inside option_tag

        const option = option_list.querySelectorAll(".option");
        for (i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
}

// creating the new div tags which are for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Modified function
//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correctAns = currentFilteredQuestions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    if(userAns === correctAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent === correctAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

// Modified function
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    let filteredQuestions = questions.filter(q => q.category === selectedLanguage && q.difficulty === selectedDifficulty);
    if (userScore > 7) {
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = `<span>and congrats! 🎉, You got <p>${userScore}</p>/10<p>Your accuracy is ${(userScore/10)*100}%</p></span>`;
        scoreText.innerHTML = scoreTag;
    }
   else if(userScore > 4){
    let scoreTag = `<span>and nice 😎, You got <p>${userScore}</p>/10<p>Your accuracy is ${(userScore/10)*100}%</p></span>`;
    scoreText.innerHTML = scoreTag;
   }
   else{
    let scoreTag = `<span>and sorry 😐, You got <p>${userScore}</p>/10<p>Your accuracy is ${(userScore/10)*100}%</p></span>`;
    scoreText.innerHTML = scoreTag;
   }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correctAns = currentFilteredQuestions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}


function startTimerLine(time){
    counterLine = setInterval(timer, 58); // Adjust the interval time
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

// Modified function
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let filteredQuestions = questions.filter(q => q.category === selectedLanguage && q.difficulty === selectedDifficulty);
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ filteredQuestions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
