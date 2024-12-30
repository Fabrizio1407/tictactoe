

const gameBoard = ( function() {
    let board = [
       [null,null,null],
       [null,null,null],
       [null,null,null]
    ];

    const azzera = function() {
        for (let i=0;i<3;i++) {
           for (let j=0;j<3;j++) {
             board[i][j]=null;
             
           }
        }
    }

    const addSign = function(sign) {
        return function(x,y) {
            board[x][y]= sign;
            if (board[x][y]!=null)
               return "Mossa non valida"         
        }

    }

    const getBoard = function() {
        return board;
    }

    return {azzera, addSign, getBoard}

})();


function player() {
    let punteggio =0;
    let risultato = "";

    const mettiX = gameBoard.addSign("X");
    const mettiY = gameBoard.addSign("O");

    const makeMove = (move,x,y) => {
        if (move=="X") {
            risultato = mettiX(x,y)}
        else 
         {risultato = mettiY(x,y)}

        return risultato;
    }

    const addScore = () => {punteggio++};

    

    

}



function gameFlow() {
    
}