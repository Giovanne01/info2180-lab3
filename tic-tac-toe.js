// load event when the whole page has loaded
window.onload = function(){
    let counter=0
    let box =  document.getElementById("board").querySelectorAll("div");
    let board = document.getElementById("board")

    //forEach function on box variable affects each div within div with id board 
    box.forEach(function(element){
        element.setAttribute("class","square");
        element.innerHTML="";

        element.addEventListener('click',function(){
          
              if (counter % 2 == 0 && this.innerHTML == ""){
                  //sets specific div/tile clicked innerHTML to X
                  element.innerHTML = "X";
                  element.setAttribute("class", "square X");
                  //counter is incremented inorder to follow the amount of possible moves in game
                  counter++;
                                   
              }
              else if(counter % 2 != 0 && this.innerHTML == ""){
                  //sets specific div clicked innerHTML to O
                  element.innerHTML = "O";
                  element.setAttribute("class", "square O");
                  //counter is incremented inorder to follow the amount of possible moves in game
                  counter++;
              }
             
            });

    });

    
    


}