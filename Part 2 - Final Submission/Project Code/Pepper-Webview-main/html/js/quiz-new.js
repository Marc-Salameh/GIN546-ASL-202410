
var questions = ["What is this sign?", "What is this sign?", "What is this sign?", "What is this sign?", "What is this sign?", "What is this sign?"];

var rightAnswers = ["hello", "goodbye", "yes", "no", "please", "thank you"];

var images = ["hello.png", "goodbye.png", "yes.png", "no.png", "please.png", "thank you.png"]
var allAnswers = [["hello", "goodbye", "yes"], ["goodbye", "yes", "no"], ["yes", "no", "please"], ["no", "please", "thank you"], ["yes", "no", "please"], ["hello", "goodbye", "please"]];


//variables used to store the user's name
var fname, lname;


//defines an object storing question, right answers, wrong answers, question number, and the user's answer
class Question {
    constructor(question, rightAnswer, arr, qNum, image) {
        this.question = question;
        this.rightAnswer = rightAnswer;
        this.allAnswers = arr;
        this.qNum = qNum;
        this.actualAnswer = -1;
        this.image = image; // Add the image property


    }

    //returns question
    getQ() {
        return this.question;
    }

    //returns question number
    getNum() {
        return this.qNum;
    }

    //returns answers in a sorted array
    getAns() {

        var answers = [];
        for (i = 0; i < this.allAnswers.length; i++) {
            answers.push(this.allAnswers[i]);
        }

        return answers;
    }
    getRightAns() {
        return this.rightAnswer;
    }
    getActualAns() {
        return this.actualAnswer;
    }

    displayQ() {
        let s = "Question " + this.getNum() + "/" + rightAnswers.length + ") ";
        s += "<p class=\"ex\">" + this.getQ() + "</p><br>";
        s += "<img src=\"" + this.image + "\" alt=\"Question Image\"><br>"; // Add this line for the image
        document.getElementById("question").innerHTML = s;
    }

    displayA() {
        var ans = this.getAns();
        var m = "";
        var i;
        for (i = 0; i < ans.length; i++) {
            m += "<input type=\'radio\' id=\'ans" + this.getNum() + "\' name=\'answer\' value=\'ans" + this.getNum() + "\'>";
            m += "<label for=\'ans" + this.getNum() + "\' class=\'ansList\'>" + ans[i] + "</label><br>";
        }

        document.getElementById("answers").innerHTML = m;
    }

    displayCheckedAns() {
        if (this.actualAnswer !== -1) {
            document.getElementsByName("answer")[this.actualAnswer].checked = true;
        }
    }

    reset() {
        var answ = document.getElementsByName('answer');

        for (i = 0; i < answ.length; i++) {
            if (answ[i].checked) {
                answ[i].checked = false;
                this.actualAnswer = -1
            }
        }
    }
    setActualAns(actAns) {
        this.actualAnswer = actAns;
    }
}


//array of QnA objects
var quest = [];
//loop used to fill in the previous array of objects
var i;
for (i = 0; i < questions.length; i++) {
    let q = new Question(questions[i], rightAnswers[i], allAnswers[i], i + 1, images[i]);
    quest.push(q);
}


var currentQ = quest[0];




function display(num) {
    // save previous result
    saveAnswers();

    //display the question and answer
    q = quest[num - 1];
    currentQ = q;
    currentQ.displayQ();
    currentQ.displayA();

    // display previously checked answer
    q.displayCheckedAns();
}


function startQuiz() {

    document.getElementById("welcome").innerHTML = "<h1>Welcome to the quiz " + "!</h1>";
    document.getElementById("signIn").style.display = "none";
    display(1);
    displayList();
    document.getElementById("quizDiv").style.display = "block";

}

//display question list
function displayList() {
    var list = "";
    var i;
    for (i = 1; i < quest.length + 1; i++) {
        list += "<li id=\"Q" + i + "\" class=\"questionNum\" onclick=\"display(" + i + ")\">Question " + i + "</li>";
    }
    document.getElementById("questions").innerHTML = list;
}

//display first question
function first() {
    display(1);
}

//display last question
function last() {
    display(quest.length);
}

//display next question
function next() {

    if (currentQ.getNum() === quest.length) {
        first();
    }
    else {
        display(currentQ.getNum() + 1);
    }
}

//display previous question
function previous() {
    if (currentQ.getNum() === 1) {
        last();
    }
    else {
        display(currentQ.getNum() - 1);
    }
}

//used to save the answers when going from one question to another
function saveAnswers() {
    var ele = document.getElementsByName('answer');
    var q = quest[currentQ.getNum() - 1];

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            q.actualAnswer = i;
        }
    }
}

// function resetQ() {
//     var ele = document.getElementsByName('answer');
//     quest[currentQ.getNum() - 1].actualAnswer=-1;

//     for (i = 0; i < ele.length; i++) {
//         if (ele[i].checked) {
//             ele[i].checked = false;
//             quest[currentQ.getNum() - 1].actualAnswer=-1
//         }
//     }

// } 
function resetQ() {
    var qu = quest[currentQ.getNum() - 1]
    qu.reset();

}


//compute the score
function calculateScore() {
    var i;
    var score = 0;

    for (i = 0; i < rightAnswers.length; i++) {
        let answersToQuest = quest[i].getAns();
        if (answersToQuest[quest[i].getActualAns()] === quest[i].getRightAns()) {
            score++;
        }
    }

    return score;
}

function restart() {
    location.reload();
}


//collect user's answers and display results
function Submit() {
    saveAnswers();
    document.getElementById("quizDiv").style.display = "none";
    var result = "<ol id=\'results\'>";
    var i;
    for (i = 0; i < rightAnswers.length; i++) {
        var answersToQuest = quest[i].getAns();
        if (quest[i].getActualAns() != -1 && answersToQuest[quest[i].getActualAns()] === quest[i].getRightAns()) {
            result += "<li>Your answer is correct: <span class=\"rightAnswer\">" + answersToQuest[quest[i].getActualAns()] + "</span></li><br>";
        }
        else if (quest[i].getActualAns() != -1 && answersToQuest[quest[i].getActualAns()] != quest[i].getRightAns()) {
            result += "<li>Your answer is incorrect: <span class=\"wrongAnswer\">" + answersToQuest[quest[i].getActualAns()] + "</span><br>The right answer is: <span class=\"noAnswer\">" + quest[i].getRightAns() + "</span></li><br>";
        }
        else {
            result += "<li><span class=\"wrongAnswer\">You didn't answer the question</span><br>The right answer is: <span class=\"noAnswer\">" + quest[i].getRightAns() + "</span></li><br>";
        }
    }

    userScore = calculateScore();

    result += "Total Score:  " + calculateScore() + "/" + rightAnswers.length;

    result += "</ul><br><br>";

    result += "<button type=\"button\" class=\"btn\" onclick=\"restart()\">Restart</button>";

    document.getElementById("results").innerHTML = result;
}



