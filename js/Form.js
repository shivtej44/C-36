class Form{
 constructor(){

 }

 display(){
     console.log("displayFunction");
  var title = createElement("h2");
  title.html("Car Racing Game");
  title.position(130,0);
  
  var input = createInput("Enter Your Name");
  input.position(130,160);
  
  var button = createButton("PLAY");
  button.position(250,200);

  var greetings = createElement("h3");
  button.mousePressed(function(){
   input.hide();
   button.hide();
   var name = input.value();
   playerCount = playerCount+1;
   player.update(name);
   player.updateCount(playerCount);
   console.log("buttonPressed");
   greetings.html("Hello "+name);
   greetings.position(130,160);
  })

  
 }
}