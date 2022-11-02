'strict mode'

// FUNZIONI

function startGame(board, maxNumbers, level){
        cellContainer.innerHTML ="";
        for ( let i = 1; i <=maxNumbers; i++){
            const cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', function(){
                cellNumber.classList.add("active");
                console.log(i);
            })
            if (level === "easy") {
                cellNumber.classList.add("easy");
            } else if (level === "hard") {
                cellNumber.classList.add("hard");
            } else if (level === "hell") {
                cellNumber.classList.add("hell");
            }
            board.append(cellNumber);
        }
}

//mi prendo il tasto play
const playButton = document.querySelector("button");

// mi prendo la board
const cellContainer = document.querySelector(".board");

// mi prendo i valori delle options

function getOption() {
    const selectElement = document.querySelector('#select1');
    const output = selectElement.value;
    console.log(output);
    if ( output === "easy") {
        playButton.addEventListener('click', function(){
        startGame(cellContainer, 100, "easy");
        }
    )} else if (output === "hard") {
        playButton.addEventListener('click', function(){
            startGame(cellContainer, 81, "hard");
            }
    )} else {
        playButton.addEventListener('click', function(){
            startGame(cellContainer, 49, "hell");
            }
    )}
}
getOption()