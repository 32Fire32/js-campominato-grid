'strict mode'

// FUNZIONI

function startGame(board){
    playButton.addEventListener('click', function(){
        for ( let i = 1; i <=100; i++){
            const cellNumber = document.createElement("div");
            cellNumber.innerHTML = i;
            cellNumber.classList.add("cellboard");
            cellNumber.addEventListener('click', function(){
                cellNumber.classList.add("active");
                console.log(i);
            })
            board.append(cellNumber);
        }
    })
}

//mi prendo il tasto play
const playButton = document.querySelector(".play");

// mi prendo la board
const cellContainer = document.querySelector(".board");

startGame(cellContainer);

