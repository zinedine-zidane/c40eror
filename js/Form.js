class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(f)
    r1=createSprite (200,200)
    r1.addImage("r1",race)
  // this.title.html("Car Racing Game");
  fill ("white")
  text ("Car Racing Game" ,displayWidth/2 - 50,100)
   // this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 30, displayHeight/2);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
