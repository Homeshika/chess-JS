function createBoard(){
    var boardSize=document.getElementById('boardsize').value;
    var displayBoard=document.getElementById('displayBoard');
    displayBoard.style.width=`${boardSize*100}px`;
    displayBoard.style.height=`${boardSize*100}px`;
    var row,col;
    for(row=0;row<boardSize;row++){
        for(col=0;col<boardSize;col++){
            var box=document.createElement('div');
            box.className='box';
            if((row+col)%2===0){
                box.classList.add('white');
            }
            else{
                box.classList.add('black'); 
            }
            displayBoard.appendChild(box);
        }
    }
}
