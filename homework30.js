// Տնային 30

// 1․ ռեկուրսիայով գրում եք ֆիբոնաչի ու ֆակտորիալ ալգորիթմները որ իդեալական աշխատեն

// 2․ ստեղծում եք 5 հատ ռեկուրսիա, տարբեր թեմաներով (լուփեր, անունների գեներացում և այլն) կարևորը իրար չպետք ա նման լինեն

// 3․ insertAdjacentHTML + insertAdjacentElement + insertAdjacentText մեթոդներն եք օգտագործում ու դնում եք տարբեր դիրքերում

// 4․ HTMLում ստեղծում եք մի հատ ինփութ ու տակից անուններ եք գրում, ու նենց եք անում որ տպելու ժամանակ ցույց տա մենակ էն անունները որոնք գրվում են ինփութի մեջ, թեկուզ տառերով, պետք ա օգտագործեք search մեթոդը 

// Հուշում, ինփութի արժեքին կարող եք կպնեմ input.value գրելով :)



function f(x) {

    if (x === 0) {
        return 1;
    }

        else {
        return x * f(x - 1);
    }
}

const num = 7;

if (num > 0) {
    let result = f(num);
    console.log(`The factorial of ${num} is ${result}`);
}



function fac(n){
    return(n<2)?1:fac(n-1)*n;
}


function fib (n){
    if(n < 2) return n;
    return fib(n-1) + fib (n-2);
}
console.log(fib(5));



//2
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(5);



function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }
 console.log (sum(4));




 let univesity = { 
    student: [{name: 'John', mark: 10}, {name: 'Alice', mark: 16 }],
    development: {
      lecturer: [{name: 'Peter', mark: 20}, {name: 'Alex', mark: 18 }],
      assistent: [{name: 'Jack', mark: 13}]
    }
  };
  function sumMarks(department) {
    if (Array.isArray(department)) { 
      return department.reduce((prev, current) => prev + current.mark, 0); 
    } else { 
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumMarks(subdep); 
      }
      return sum;
    }
  }


  //3


  const body = document.body;

const divD = document.createElement("h1");
body.insertAdjacentHTML("afterend",`
<h1 style="font-size:35px; font-family:cursive; background-color:red">you are my best one</h1>

<div style="font-size:35px; font-family:Arial;"> Hello </div>`);
const span = document.createElement("span");
body.insertAdjacentText("beforebegin", `I like kearning JavasCript`);
const itsDiv=document.createElement("div");
body.insertAdjacentElement("afterbegin",`<div style="width=25px; heigth=25px; background-color:blue; radius-border: 50%;">it's a div</div>`);


