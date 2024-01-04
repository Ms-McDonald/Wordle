let height = 6; //Number of guesses
let width = 5; //Length of word

let row = 0; //Current attempt number
let col = 0; //Current letter for attempt

let gameOver = false;
let word = "SQUID";

// words = ["SQUID", "APPLE", "GAMES"];

window.onload = function(){

    initialize();

}


function initialize(){

    //Create the game board
    for(let r = 0; r < height; r++){
        for(let c = 0; c < width; c++)
        {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}