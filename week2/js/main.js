//Quiz Ninja - Chapter 4 Activity (Functions)

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz) {
    let score = 0;

    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }

    gameOver();

    //Arrow function will not work if you call function before it is initialized
    //const ask = (question) => { return prompt(question); }


    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if (response === answer) {
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    //Attempted to change this to a function expression, but learned a lesson about function hoisting. It does not work with function expression!

    function gameOver() {
        alert(`Game Over, you scored ${score} point${score !==1 ? 's' : ''}`);
    }
}
start(quiz);


//Quiz Ninja - Chapter 3 activity (Arrays, Loops, Logic)

/*const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

let score = 0;

for (const [question, answer] of quiz) {
    const response = prompt(question);
    if (response === answer) {
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
*/


//Quiz Ninja - Chapter 2 activity

//const question = "What is Superman's real name?"
//const answer = prompt(question);
//alert(`You answered ${answer}`);