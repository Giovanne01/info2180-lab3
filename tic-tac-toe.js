// load event when the whole page has loaded
window.onload = function(){
    let counter=0
    let row_w = false;
    let col_w =false;
    let d_check = false;
    var winner = "";
    let game_tracker = ["","","","","","","","",""];
    let box =  document.getElementById("board").querySelectorAll("div");
    let board = document.getElementById("board")
    var win = document.getElementById("status")


    //forEach function on box variable affects each div within div with id board 
    box.forEach(function(element){
        element.setAttribute("class","square");
        element.innerHTML="";

        element.addEventListener('click',function(){
          
              if (counter % 2 == 0 && this.innerHTML == ""){
                  //sets specific div/tile clicked innerHTML to X
                  element.innerHTML = "X";
                  element.setAttribute("class", "square X");
                  //counter is incremented inorder to follow the amount of possible moves in game and also the type of move
                  counter++;
                  game_tracker[Array.from(box).indexOf(element)] = "X";
                }else if(counter % 2 != 0 && this.innerHTML == ""){
                  //sets specific div clicked innerHTML to O
                  element.innerHTML = "O";
                  element.setAttribute("class", "square O");
                  //counter is incremented inorder to follow the amount of possible moves in game and also the type of move
                  counter++;
                  game_tracker[Array.from(box).indexOf(element)] = "O";
              }
             
            });

        //Add an event listener for hovering
        element.addEventListener('mouseover',function(){
            element.classList.add('hover');      
        });

        // This event listener is waiting on the mouse to leave div to revert it back to it's original class
        element.addEventListener('mouseout',function(){
            if (element.innerHTML == "X"){element.setAttribute("class","square X"); }
            else if (element.innerHTML == "O"){
                element.setAttribute("class","square O"); 
            }
            else{
                element.setAttribute("class","square")
            }

                    
        });

    });

    
    

    //Anytime the board is clicked the following conditions are checked 
    board.onclick = function(){
        //Waits until 5 moves haves been played to start checking
        if (counter>=5){
        for (let row_check = 0; row_check<=6; row_check+=3){
            if (game_tracker[row_check]==game_tracker[row_check+1] &&  game_tracker[row_check+1]==game_tracker[row_check+2]
                && game_tracker[row_check+1]==game_tracker[row_check+2]){   
                //ensures that no div has an innerHTML of ""
                if (game_tracker[row_check]!="" || game_tracker[row_check+1]!="" || game_tracker[row_check+1]!=""){
                    winner = game_tracker[row_check];
                    row_w = true
                }
            } 
        };
        // Uses for loop to check each columns
        for (let col_check = 0; col_check<=3; col_check++){
            if (game_tracker[col_check]==game_tracker[col_check+3] && game_tracker[col_check]==game_tracker[col_check+6]&& 
                 game_tracker[col_check+3]==game_tracker[col_check+6]){
                //ensures that no div has an innerHTML of ""
                if (game_tracker[col_check]!="" || game_tracker[col_check+3]!="" || game_tracker[col_check+6]!=""){
                    winner = game_tracker[col_check];
                    col_w = true;
                };
            };
        };
        // checks if user won diagonally from top left to bottom right
        if (game_tracker[0] == game_tracker[4] && game_tracker[0]== game_tracker[8] && game_tracker[4] == game_tracker[8]){
                winner = game_tracker[0];
                d_check =true;
            };
        // checks if user won diagonally from bottom left to top right
        if (game_tracker[2] == game_tracker[4] && game_tracker[2]== game_tracker[6] && game_tracker[4] == game_tracker[6]){
                winner = game_tracker[2];
                d_check =true;
            };
        };

        //Checks if game ends in draw by ensuring all indexes of game_tracker was filled
        if (!row_w && !col_w && !d_check && !game_tracker.includes("")){
            win.innerHTML = "Game-Ends in Draw";
            win.setAttribute("class","you-won")
        }
        // Checks if there is any winning combination
        if (row_w || col_w || d_check) {   
        //Changes the innerHTML of div with status class declared as win 
        win.innerHTML = "Congratulations! "+ winner +" is the Winner!";
        //sets attribute of win
        win.setAttribute("class","you-won");
        // disables the possibility of clicking anymore boxes after winner is declared(anti-cheat)
        board.style.pointerEvents = 'none';
            

    }

    }


}