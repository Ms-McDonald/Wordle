let height = 6; //Number of guesses
let width = 5; //Length of word

let row = 0; //Current attempt number
let col = 0; //Current letter for attempt

let gameOver = false;
let word = "SQUID";

// words = ["SQUID", "APPLE", "GAMES"];

window.onload = function () {

    initialize();

}


function initialize() {

    //Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Listen for Keyup
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
        
        // alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                        col++;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col--;
            }
            let currentTile = document.getElementById(row.toString() + "-" + col.toString());
            currentTile.innerText = "";
        }

        else if (e.code == "Enter" && col == width) {
            update();
            row++;
            col = 0;
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    })
}


function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let tile = document.getElementById(row.toString() + "-" + c);
        let letter = tile.innerText;
        
        // Correct position?
        if (word[c] == letter) {
            tile.classList.add("correct");
            correct++;
        }
        else if (word.includes(letter)) {
            tile.classList.add("present");
        }
        else {
            tile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
            alert("Winner");
        }
    }
}