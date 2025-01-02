

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
            
            if ((x>2) || (x<0) || (y>2) || (y<-1)) {
                gameFlow.setChiTocca();
                return "Mossa non valida"
            } else 
 {           if ((board[x][y]!=null))
               {gameFlow.setChiTocca();
                return "Mossa non valida" } 
            else {
                board[x][y]= sign;
                return gameFlow.getTurno();
            
            }   }
        }

    }

    const getBoard = function() {
        return board;
    }

    return {azzera, addSign, getBoard}

})();


function player(nomeSel,sign) {
    let punteggio =0;
    let mySign=sign;
    let risultato = "";
    let nome=nomeSel;


    const getNome = () => nome;

    const mettiX = gameBoard.addSign("X");
    const mettiO = gameBoard.addSign("O");

    const makeMove = (x,y) => {
        if (mySign=="X") {
            risultato = mettiX(x,y)}
        else 
         {risultato = mettiO(x,y)}
         
         
        return !gameFlow.checkTris(gameBoard.getBoard())? risultato:gameFlow.checkPari(gameBoard.getBoard())?"PARI!":"VINTO!";
    }

    const addScore = () => {punteggio++};

    
   return {makeMove, addScore, getNome}
}


const gameFlow =  (function() {
    let chiTocca = 1;
    let checkFull =0

    

    const getTurno = () => {
        if (chiTocca==1) {
            let str = `Tocca a ` //${player1.getNome()}`
            return str
        }
    else {
        let str = `Tocca a `//${player2.getNome()}`
         return str;
    }};

    const getChiTocca = () => chiTocca;
    const setChiTocca = () => chiTocca==1?chiTocca=2:chiTocca=1;

    const checkTris = (board) => {
        let end = false;
        

        for (let i=0;i<3;i++) {

          
            // righe
            if ((board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][0]!== null) )  end=true;
            

            // colonne
            if ((board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[0][i]!== null) )  end=true;

             // diagonale 1
             if ((board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!==null))  end=true;     
             // diagonale 2
             if ((board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!==null) )  end=true;

             if ((board[0][0])!==null && 
                 (board[0][1])!==null && 
                 (board[0][2])!==null && 
                 (board[1][0])!==null && 
                 (board[1][1])!==null && 
                 (board[1][2])!==null && 
                 (board[2][0])!==null && 
                 (board[2][1])!==null && 
                 (board[2][2])!==null)  end=true;

    }
    

    return end;
}

const checkPari = (board) => {
    let full = true;
    
    for (let i=0;i<3;i++) {
        for (let j=0;j<3;j++) {
            if (board[i][j]==null) {
                 full=false;
            }
        }
    }
    return full;
}

    return {checkTris, checkPari, getTurno, getChiTocca,setChiTocca}
    
}) ();

// const player1 = player(prompt("Giocatore 1 - Digita il tuo nome: "),"X");
// const player2 = player(prompt("Giocatore 2 - Digita il tuo nome: "),"O");

//  console.log(` Giocatore 1 = X  --- Giocatore 2 = O \n ${gameFlow.getTurno()}`);

//    while (!gameFlow.checkTris(gameBoard.getBoard()))

// {    
//     if (gameFlow.getChiTocca()==1) {
//         console.log(player1.makeMove(prompt(`${player1.getNome()} muove -->  Riga: `,0),prompt(`Colonna: `,0)));
//         console.log(gameBoard.getBoard());
//         gameFlow.setChiTocca();

//     } else
//     {
//         console.log(player2.makeMove(prompt(`${player2.getNome()} muove -->  Riga: `,0),prompt(`Colonna: `,0)));
//         console.log(gameBoard.getBoard());
//         gameFlow.setChiTocca();
//     }


// }


const displayController = (() => {
    const celle = document.querySelectorAll(".cella");

    const container = document.querySelector(".container");
    const testoTurno = document.createElement("h1");
    testoTurno.textContent="ciao";
    container.appendChild(testoTurno);
    

       for (cella of celle) {
        cella.textContent = "X";
       }

  //  const addMarker = function()

})()





