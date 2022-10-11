// 1.Ստեղծել 1 Promise իրա resolve ու reject-ով
// 2. ստեղծել ֆունկցիա, որ Promise.race - ի ժամանակ կանսոլում տպի էն item-ը որը առաջինն ա աշխատել


let productIsGood=true;
let newBuyProduct=new Promise(function(resolve, reject){
    if(productIsGood){
        let brand={
            bag:"blue",
            shoes:"black",
            hat:"white"
        };
        resolve(brand);
    }else{
        let reason =new Error("quality is bad");
    }
});
console.log(newBuyProduct);

let myChoice=function(brand){
    let message="I am setisfied with my products"  +  brand.bag   +   "  " +  brand.shoes  +
    brand.hat  + "brand";
    return Promise.resolve(message);
};
let myLiked=function(){
    newBuyProduct.then(myChoice)
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error.message);
    });
};
myLiked();


// *****

const ask=new Promise(function(resolve, reject){
    console.log("let's start lesson");
    setTimeout(()=>{
        console.log("Today we will do an interestin lesson");
        const serverStatus =200;
        const lesson={
            promis:"all items",
            item1:"then",
            item2:"catch"
        }
        if(serverStatus===200){
            resolve(lesson);
        }else if(serverStatus===400){
            reject();
        }
    },1000);
});
ask.then(lesson=>{
    console.log("It is JavaScript lesson");
    lesson.sataus="starts";
    return lesson;
}).then(lesson =>{
    lesson.isAlreadyStarted=true;
    console.log(`we all should work hard ${lesson.promis} and it items  such as ${lesson.item1} and ${lesson.item2} `);
    console.log(lesson);
}).then(lesson=>{

}).catch(les=>{
    throw new Error("Lesson fail");
}).finally(()=>{
console.log("Lesson is over");
});



const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 600, "Hello");
  });
   
  const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Wellcome");
  });
   
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
  });



