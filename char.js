
function Character(name, profession, gender, age, strength, hitPoints ){
this.name = name;
this.profession = profession;
this.gender = gender;
this.age = age;
this.strength = strength;
this.hitPoints = hitPoints;
this.printStats = function(){

    console.log(this.name + this.profession + this.gender + this.age + this.strength + this.hitPoints)
    console.log("\n-------\n")

} 
this.isAlive = function (){
    if (this.hitPoints > 0){
        console.log(this.name + "is still alive!");
        console.log("\n-------\n");
        return true;
    }
this.Attack = function (obj){
    console.log(obj.hitPoints)
    
}

}
}

Character.prototype.Attack = function(){
    if (Character[1].hitPoints >  Character[2].hitPoints)
}

const Eliouse = new Character("Eliouse   ", "Psychic  ", "female  ", 28, 101, 200); 
const Warren = new Character("Warren   ", "Gambler  ", "male  ", 56, 400, 120);
Eliouse.printStats()
Warren.printStats()
 



// * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

// * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.