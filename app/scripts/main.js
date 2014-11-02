$( document ).ready(function(){
    //initialize variables
    var childNum,curChild;
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

    //loop through board function will either call reset or check on each item
    var loopThroughBoard = function(action){
        for(var x=0, len=board1.length ; x<len ; x++){
            for(var y=0; y<len; y++){
                childNum=(y*9)+x+1;
                curChild = $(".sudoku :nth-child("+childNum+")")
                if(action=='reset'){
                    resetItem(curChild,board1[y][x])
                }else if(action=='check'){
                    checkItem(curChild, y,x);
                }
            }
        }
    }

    //reset item function
    var resetItem = function(elem,checkval){
        elem
            .removeClass( "incorrect" )
            .removeClass( "correct" )
            .removeClass( "given" );
        if(checkval !== 0){
            elem
                .val(checkval)
                .prop('disabled', true)
                .addClass("given");
        }else{
            elem
                .val('')
                .prop('disabled', false);
        }
    }

    //check item function
    var checkItem = function(elem, j, i){
        elem.prop('disabled', true);
        if(elem.val() != board1_solved[j][i]){
            elem.addClass( "incorrect" );
        }
    }


    //click listeners
    $( "#restartBtn" ).on('click',function() {
        loopThroughBoard('reset');
    });

    $( "#checkBtn" ).click(function() {
        loopThroughBoard('check');
    });


    //initailze board on document load
    loopThroughBoard('reset');


});