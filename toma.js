


 function DigitalPal(hungry, sleepy, bored, age){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
       if (hungry === true)
       console.log("that was yummy")
       if (hungry === false)
       console.log("No thanks! I'm full.")
    }
    this.sleep = function(){
        if (sleepy === true) 
        this.age += 1;
        console.log("zzzzz")
        if (sleepy != true)
        console.log("I am not tired!")
        console.log(this.age)
    }
    this.play = function() {
        if (bored === true)
        console.log("Yay! Let's Play!")
        if (bored === false)
        console.log("Not right now. Later?")
    }
    this.increaseAge = function () { 
        if (this.sleepy === true)
        this.age = this.age + 1; 
        console.log(`Happy Birthday to Me! I am ${this.age} old!`)
    }
 }
let dog = new DigiPal()
DigiPal.feed()
DigiPal.sleep()
DigiPal.play()
DigiPal.increaseAge()


