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
                  //counter is incremented inorder to follow the amount of possible moves in game and also the type of move
                  counter++;
                                   
              }
              else if(counter % 2 != 0 && this.innerHTML == ""){
                  //sets specific div clicked innerHTML to O
                  element.innerHTML = "O";
                  element.setAttribute("class", "square O");
                  //counter is incremented inorder to follow the amount of possible moves in game and also the type of move
                  counter++;
              }
             
            });

        //Add an event listener for hovering
        element.addEventListener('mouseover',function(){
            element.classList.add('hover');      
        });

        // This event listener is waiting on the mouse to leave div to revert it back to it's original class
        element.addEventListener('mouseout',function(){
            if (element.innerHTML == "X"){element.setAttribute("class","square X"); 
            }
            else if (element.innerHTML == "O"){
                element.setAttribute("class","square O"); 
            }
            else{
                element.setAttribute("class","square")
            }

                    
        });

    });

    
    


}