const boxElement = document.querySelectorAll(".box")
var winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
    [2, 4, 6]
];
var xAttempts = [];
var oAttempts = [];
var click = 0;
var wonTheGame = 0;
const message = document.getElementById("message")
const gameResult = document.getElementById("result")
const restart = document.getElementById("button")
boxElement.forEach(box => {
    box.onclick = handleClick;
});

function handleClick(e) {
    console.log(e.target);
    console.log(e.target.getAttribute('id'));
    const i = e.target.getAttribute('id');
    const text =document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);

    if(click%2 ==0){
        xAttempts.push(parseInt(i-1));
        text.innerHTML="X";
        text.style.color="#FAB201";
        result(winningCombination,xAttempts,"X")
    }

    else{
        oAttempts.push(parseInt(i-1));
        text.innerHTML="0"
        text.style.color="#FAB201"
        result(winningCombination,oAttempts,"O")
    } 
    click++;
    if(click==9 && wonTheGame==0){
        gameResult.style.visibility="visible";
        message.innerHTML="It is a Tie";
    }
}

function result(winningCombination,attempt,player){
    let flag =0;
    let checker=[];
    for (var i =0; i < winningCombination.length; i++) {
        console.log(winningCombination[i]);
        if(Array.isArray(winningCombination[i])){

            result(winningCombination[i],attempt,player);
        }else{
            if(attempt.includes(winningCombination[i])){
                checker.push(true);
                flag++;
            }else{
                checker.push(false)
            }
        }
    }
    if(checker.every(check => check===true) && flag>2) {
        gameResult.style.visibility="visible"
        message.innerHTML=" "+ player+ "'" + "Won the game!!";
        wonTheGame=1;
    }
}

var again = document.getElementById("button")
again.onclick= () =>{
    location.href="./index.html"
}