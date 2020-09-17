// CONST
const X = "X";
const O = "O";
const NONE = "";
const winningCombos = [
    [
        [0, 0],
        [0, 1],
        [0, 2],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2],
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0],
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1],
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 1],
        [2, 2],
    ],
    [
        [0, 2],
        [1, 1],
        [2, 0],
    ],
];

//STATE
var currentPlayer = X;
var map = [
[NONE, NONE, NONE],
[NONE, NONE, NONE],
[NONE, NONE, NONE]]


//VIEW
const cells = document.getElementsByTagName('td');
for (cell of cells){
    cell.addEventListener("click", function(e){
        //TODO: notification that you cannot re-click
        if (e.target.innerText === ""){
            //UPDATE MAP
            const cellId = e.target.id;
            const x_coor = cellId[0];
            const y_coor = cellId[2];
            if (map[x_coor][y_coor] == NONE){
                map[cellId[0]][cellId[2]] = currentPlayer

                e.target.innerText = currentPlayer;
                if (currentPlayer == X){
                    currentPlayer = O;
                }
                else {
                    currentPlayer = X;
                }
            }
        }
    });
}
    