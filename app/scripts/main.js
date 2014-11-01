$( document ).ready(function(){
     var board1_solved = [
    [1,2,7,4,5,6,9,8,3],
    [8,9,4,1,2,3,5,6,7],
    [3,5,6,7,8,9,1,4,2],
    [4,3,9,6,1,5,7,2,8],
    [7,1,8,3,4,2,6,9,5],
    [2,6,5,9,7,8,3,1,4],
    [5,7,1,2,6,4,8,3,9],
    [9,8,2,5,3,1,4,7,6],
    [6,4,3,8,9,7,2,5,1],
  ];
  var board1 = [
    [1,2,0,4,5,0,0,8,0],
    [0,0,4,0,0,3,5,0,0],
    [3,0,6,7,0,0,0,4,2],
    [4,0,9,0,0,5,7,2,0],
    [0,1,0,3,4,0,6,0,5],
    [2,0,5,9,0,0,3,1,4],
    [0,7,0,0,0,0,8,0,0],
    [9,0,0,5,0,0,0,0,6],
    [0,4,3,8,0,7,2,0,1],
  ];


    var childNum,numWrong,curChild;

    var resetBoard = function(){
        childNum = 0;
        for(var x=0, len=board1.length ; x<len ; x++){
            for(var y=0; y<len; y++){
                childNum=(y*9)+x+1;
                curChild = $(".sudoku :nth-child("+childNum+")")
                curChild.removeClass( "incorrect" )
                if(board1[y][x] !== 0){
                    curChild
                        .val(board1[y][x])
                        .prop('disabled', true);
                }else{
                    curChild
                        .val('')
                        .prop('disabled', false);
                }
            }
        }
    }

    var checkAnswer = function(){
        childNum = 0;
        numWrong = 0;
        for(var x=0, len=board1.length ; x<len ; x++){
            for(var y=0; y<len; y++){
                childNum=(y*9)+x+1;
                curChild = $(".sudoku :nth-child("+childNum+")");
                curChild.prop('disabled', true);
                if(curChild.val() != board1_solved[y][x]){
                    numWrong++;
                    curChild
                        .addClass( "incorrect" );
                }
            }
        }
    }

    resetBoard();
    $( "#restartBtn" ).on('click',function() {
        resetBoard();
    });

    $( "#checkBtn" ).click(function() {
        checkAnswer();
    });

});