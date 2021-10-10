// load event when the whole page has loaded
window.onload = function(){
    
    var box =  document.getElementById("board").querySelectorAll("div");
    var board = document.getElementById("board")

    //forEach function on box variable affects each div within div with id board 
    box.forEach(function(element){
        element.setAttribute("class","square");
    });


}