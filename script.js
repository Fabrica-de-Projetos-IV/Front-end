//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const resultado = document.querySelector(".resultado");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(30);
    startTimerLine(0);
}
let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let dev = 0;
let redes = 0;
let geren = 0;
let teste = 0;
let analista = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
restart_quiz.onclick = () => {
    dev = 0;
    redes = 0;
    geren = 0;
    teste = 0;
    analista = 0;
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Tempo";
    next_btn.classList.remove("show");
}
quit_quiz.onclick = () => {
    window.location.reload();
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Tempo";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[3] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[4] + '</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    let teste1 = questions[que_count].answer1;
    let teste2 = questions[que_count].answer2;
    let teste3 = questions[que_count].answer3;
    let teste4 = questions[que_count].answer4;
    const allOptions = option_list.children.length;
    console.log("SELECIONOU: ", userAns);

    // console.log("CORRETO1: ", correcAns);

    // console.log("CORRETO2: ", teste1);

    // console.log("CORRETO3: ", teste2);

    // console.log("CORRETO4: ", teste3);

    // console.log("CORRETO5: ", teste4);


    answer.classList.add("correct");
    //if (userAns = "A") {
    //    a++;
    //    console.log(a);
    //}

    //log(answer.textContent);

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        //userScore += 1; //upgrading score value with 1
        dev += 1;
        console.log("A = ", dev);
        console.log("B = ", redes);
        console.log("C = ", geren);
        console.log("D = ", teste);
        console.log("E = ", analista);
        // answer.classList.add("correct"); //adding green color to correct selected option
        //answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        //console.log("Correct Answer");
        // console.log("Your correct answers = " + userScore);
    } else if (userAns == teste1) {
        redes += 1;
        console.log("A = ", dev);
        console.log("B = ", redes);
        console.log("C = ", geren);
        console.log("D = ", teste);
        console.log("E = ", analista);
    } else if (userAns == teste2) {
        geren += 1;
        console.log("A = ", dev);
        console.log("B = ", redes);
        console.log("C = ", geren);
        console.log("D = ", teste);
        console.log("E = ", analista);
    } else if (userAns == teste3) {
        teste += 1;
        console.log("A = ", dev);
        console.log("B = ", redes);
        console.log("C = ", geren);
        console.log("D = ", teste);
        console.log("E = ", analista);
    } else if (userAns == teste4) {
        analista += 1;
        console.log("A = ", dev);
        console.log("B = ", redes);
        console.log("C = ", geren);
        console.log("D = ", teste);
        console.log("E = ", analista);
    } else {

    }

    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Finalizado ";
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {

                    console.log("Finalizado: Resposta automática.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 56);

    function timer() {
        time += 1;
        time_line.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> de <p>' + questions.length + '</p> Perguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

resultado.onclick = () => {
    console.log("A = ", dev);
    console.log("B = ", redes);
    console.log("C = ", geren);
    console.log("D = ", teste);
    console.log("E = ", analista);
    f = Math.max(dev, redes, geren, teste, analista);
    console.log("maior numero: ", f);

    if (f == dev) {
        console.log("A é o maior "); { varWindow = window.open('smash-template-opl/Dev/smash-template-opl/dev.php', 'popup') }

    } else if (f == redes) {
        console.log("B é o maior "); { varWindow = window.open('smash-template-opl/Redes/smash-template-opl/redes.php', 'popup') }

    } else if (f == geren) {
        console.log("C é o maior "); { varWindow = window.open('smash-template-opl/Gerenciamento de projetos/smash-template-opl/geren.php', 'popup') }

    } else if (f == teste) {
        console.log("D é o maior "); { varWindow = window.open('smash-template-opl/QA/smash-template-opl/qa.php', 'popup') }

    } else if (f == analista) {
        console.log("E é o maior "); { varWindow = window.open('smash-template-opl/Analista de dados/smash-template-opl/analista.php', 'popup') }

    }


}