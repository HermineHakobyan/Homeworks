// 4. ստեղծում եք function constructor որը պետք ա նկարագրի ձեր սիրած առարկաները/մարդկանց, 
//ու էնպես պետք ա անեք, որ ցանկացած տիպի առարկա/մարդ կարողանաք ստեղծել

// 5․ պրակտիկա եք անում setPrototypeOf-ով, getPrototypeOf-ով, Object.assign, Object.create մեթոդերով



class Family{
        constructor(fName,  gender,  hobby){
            this.fName=fName;
            this.gender=gender;
            this.hobby=hobby;
            
        }
        familName = function(){
            console.log(`my name is ${this.fName}   my hobby is ${this.hobby}`);
            
        }
        sayGender=function(a){
            if (a){
                console.log(`${this.fName} is female`);
            }else{
                console.log(`${this.fName} is male`);
            }
            
        }
        
        
    }
    const kar= new Family("Karen Karapetyan", "male", "lying");
    const karo = new Family("Karapet Karapetyan", "male", "playing");
    const ann = new Family("Anna Karapetyan", "female",  "dancing");
    const herm= new Family("Hermine Hakobyan", "female", "learning");

karo.sayGender(false);
ann.sayGender(true);
kar.sayGender(false);
herm.sayGender(true);
karo.familName();
ann.familName();
kar.familName();
herm.familName();



const child ={
    age:9,
    health:100,
    school:25,
    country:"Armenia",
    city:"Gyumry",
    run(){
        console.log("I like learning !!!")
    }
    };
    const syuz=Object.create(child);
    
    console.log(`Hi everybody I am an schoolchild
    my age is ${child.age} my school is ${child.school}
    and my city is ${child.city}`);

    const mari ={
        name:"Mari",
    };
    Object.setPrototypeOf(mari, child);
    console.log(`My name is ${mari.name} and I am from ${mari.country}`);
    const her ={
        name:"Hermin",
    };
    Object.assign(her, child);
    console.log(`my name is ${her.name} , I live in ${her.city} my health is ${her.health}`);