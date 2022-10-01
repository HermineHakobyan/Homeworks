// Տնային 43

// 1․ լուծում եք class-ի պոլիմորֆիզմի հարցը

// 2․ ստեղծում եք class, որը կունենա ինկապսուլացիա արված 1 մեթոդ և մեկ փրոփերթի (և վանդականիշով և փոփոխականով և տակի գծիկով)

// 3․ աշխատել ստատիկների հետ



  class Animal {
    constructor(voice){
        this.voice=voice;
            anim(voice){
            if(voice=== this.voice){
                console.log("rrr, 'm an animal");
            }else{
                console.log("puhhhhh");
            }
        }
    }
    
}
class Dog extends Animal {
    constructor(voice){
        this.voice=voice;
        anim(voice){
        if(voice=== this.voice){
            console.log("woof, woof");
        } else{
            console.log("puhhhhh");
        }  
   
}

class Cat extends Animal{
    constructor(voice){
        this.voice=voice;
        anim(voice){
        if(voice=== this.voice){
            console.log("meow, meow");
        } else{
            console.log("puhhhhh");
        }  
}

const animal=new Animal();
const dog = new Dog();
const cat= new Cat();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Cat);



const animals=[
    {type: "animal", say:"rrr, 'm an animal"},
    {type:"dog", say: "woof, woof"},
    {type:"cat", say: "meow, meow"}
];

function findAnimal(...params){
    if(typeof(params[0]) === "string"){
        return animals.filter(obj => obj.type === params[0]);
    }else if (typeof(params[0]) === "string"){
        return animals.filter(obj => obj.say === params[0]);
    }
}
console.log(findAnimal("dog"));
console.log(findAnimal("meow, meow"));

//2


class Student{
    constructor(id, faculty){
        //this.id=id;
        this.faculty=faculty;
    }
    #id="4587";

    run(){
        console.log(`Student's id: ${this.id}, faculty is:${this.faculty}`);
    }
    
    get iden () {
		return this.#id;
	}

}
const ann = new Student("2541", "finanace");
console.log(ann);


//3
class Basic {
	constructor (skill) {
		this.skill = skill;
	}

	run() {
		console.log(this.skill);
	}

	static hi() {
		console.log("I have good working skill");
	}

	static mark = 100;
}

class Experians extends Basic {
	constructor (skill) {
		super(skill);
	}
}
Basic.hi();
Experians.hi();

console.log(Basic.mark);
console.log(Experians.mark);