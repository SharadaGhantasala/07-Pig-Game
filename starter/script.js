'use strict';

//score stuff
const p1 = document.querySelector(".player--0");
const p2 = document.querySelector(".player--1");
const p1name = document.querySelector(".name--0");
const p2name = document.querySelector(".name--1");
const p1score = document.querySelector("#score--0");
const p2score = document.getElementById("score--1");
const p1s = 0;
const p2s = 0;
p1score.textContent = 0;
p2score.textContent = 0;//javascript will convert these to strings



//current scores
let p1current = 0;
let p2current = 0;
const oneCurrent = document.querySelector("#current--0");;
const twoCurrent = document.querySelector("#current--1");
//tracking active players
const scores = [0, 0];
let current = 0;
let activePlayer = 0;






//dice stuff
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
diceEl.classList.add("hidden");
//other buttons
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");






btnRoll.addEventListener("click", function () {
    let diceVal = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = "dice-" + diceVal + ".png";
    if (diceVal !== 1) {

        current += diceVal;
        if (current > 10) {
            if (activePlayer === 0) {
                p1.classList.add("player--winner");
                //p1name.classList.add("name"); // Corrected
            } else {
                p2.classList.add("player--winner");
                //p2name.classList.add("name"); // Corrected
            }
        }

        activePlayer === 0 ? p1current += diceVal : p2current += diceVal;
        document.getElementById("current--" + activePlayer).textContent = current;
        //increments the score of the active player
    } else {
        current = 0;
        if (activePlayer === 0) {
            p1current = 0
            document.getElementById("score--0").textContent = 0;

        } else {
            p2current = 0;
            document.getElementById("score--1").textContent = 0;
        }
        document.getElementById("current--" + activePlayer).textContent = current;
        activePlayer = activePlayer === 0 ? 1 : 0;
        activePlayer === 0 ? current = p1current : current = p2current;

        switchPlayers();

    }

});
btnHold.addEventListener("click", function () {


    activePlayer === 0 ? p1score.textContent = p1current : p2score.textContent = p2current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayer === 0 ? current = p1current : current = p2current;

    switchPlayers();

});


const switchPlayers = function () {
    p1.classList.toggle("player--active");
    p2.classList.toggle("player--active");
};


btnNew.addEventListener("click", function () {
    if (p1.classList.contains("player--winner")) {
        p1.classList.remove("player--winner");
    } else if (p2.classList.contains("player--winner")) {
        p2.classList.remove("player--winner");
    }
    if (p2.classList.contains("player--active")) {
        p2.classList.remove("player--active");
        p1.classList.add("player--active");

    }

    activePlayer = 0;
    current = 0;
    p1current = 0;
    p2current = 0;

    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;
    diceEl.classList.add("hidden");
});

const winner = function () {

}



