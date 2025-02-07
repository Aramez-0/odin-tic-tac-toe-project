let gameBoard = function() {
    let gameContainer = document.querySelector(".game-container");
    let pos1 = document.querySelector("#pos1");
    let pos2 = document.querySelector("#pos2");
    let pos3 = document.querySelector("#pos3");
    let pos4 = document.querySelector("#pos4");
    let pos5 = document.querySelector("#pos5");
    let pos6 = document.querySelector("#pos6");
    let pos7 = document.querySelector("#pos7");
    let pos8 = document.querySelector("#pos8");
    let pos9 = document.querySelector("#pos9");
    let position = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
    let doc = {gameContainer, position};
    return doc;
};

let getGameEle = gameBoard();

let player = function(name, ele) {
    if (name === 'x') {
        ele.classList.add("X");
    } else if (name === 'o') {
        ele.classList.add("O");
    };
};

xTurn = true;

for (let i = 0; i < getGameEle.position.length; i++) {
    let ele = getGameEle.position[i];
    ele.addEventListener("click", () => {
        if (xTurn === true && ele.classList.contains("X") === false && ele.classList.contains("O") === false) {
            player('x', ele);
            xTurn = false;
        } else if (xTurn === false && ele.classList.contains("X") === false && ele.classList.contains("O") === false) {
            player('o', ele);
            xTurn = true;
        };
        win();
    });
};

let finish = function(winner) {
    let dialog = document.querySelector("dialog");
    let dialogP = document.querySelector("#dialog-p");
    let exitDialog = document.querySelector("#exit-dialog");
    
    exitDialog.addEventListener("click", () => {
        dialog.close();
        getGameEle.position.forEach((ele) => {
            ele.classList.remove('X');
            ele.classList.remove('O');
        });
        xTurn = true;
    });

    if (winner === 'x') {
        dialogP.textContent = 'Congratulations: X won';
    } else if (winner === 'o') {
        dialogP.textContent = 'congratulations: O won';
    } else if (winner === 'draw') {
        dialogP.textContent = 'It was a draw';
    };
    dialog.showModal();
};

let win = function() {
    let winCondition = function(a, b, c) {
        if (getGameEle.position[a].classList.contains("X") && getGameEle.position[b].classList.contains("X") && getGameEle.position[c].classList.contains("X")) {
            finish('x');
        } else if (getGameEle.position[a].classList.contains("O") && getGameEle.position[b].classList.contains("O") && getGameEle.position[c].classList.contains("O")) {
            finish('o');
        };
    };

    winCondition(0, 1, 2);
    winCondition(3, 4, 5);
    winCondition(6, 7, 8);
    winCondition(0, 3, 6);
    winCondition(1, 4, 7);
    winCondition(2, 5, 8);
    winCondition(0, 4, 8);
    winCondition(2, 4, 6);

    let isDraw = getGameEle.position.every(function(ele) {
        return ele.classList.contains("X") || ele.classList.contains("O");
    });

    if (isDraw) {
        finish('draw');
    };
};

let dynamicBackground = function() {
    let container = document.querySelector("#container");
    
    if (visualViewport.height > visualViewport.width) {
        container.setAttribute("class", "length-bg-img");
    } else {
        container.setAttribute("class", "width-bg-img");
    };

    window.addEventListener("resize", () => {
        let container = document.querySelector("#container");
        
        if (visualViewport.height > visualViewport.width) {
            container.setAttribute("class", "length-bg-img");
        } else {
            container.setAttribute("class", "width-bg-img");
        };
    })
    
};
dynamicBackground();




// name? i don't think players need a name. add it if you feel like it \
// it should be easy

// maybe add dark mode