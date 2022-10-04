
// 1. պրակտիկա եք անում նշված թեմաներով

// forEach (ստեղծում եք 2 հատ)
// filter (ստեղծում եք 5 հատ)
// map (ստեղծում եք 5 հատ)
// reduce (ստեղծում եք 8 հատ)
// some + every (ստեղծում եք 2 հատ)
// fill (ստեղծում եք 1 հատ)
// find (ստեղծում եք 1 հատ)

// 2. ձեռքով ստեղծում եք հետևյալ մեթոդները
// forEach 
// map
// filter
// reduce


//foreach
const arr =[14,54,23,85,96,102,11,40];
arr.forEach((item, index)=>console.log(`item is ${item}, index is ${index}`));

const arr1=["hi", "why", "how", "now", "then", 5, 8, 9];
arr1.forEach((it, ind, cur)=>{
    console.log(`arr its are ${it}, arr inds are ${ind}, and we can see curren arr ${cur}`);
});


//filter
const b=[10, 15, 20, 3, 8, 65, 4, 98, 55, 18];
const filterB=b.filter((item, index, current)=>{
    return index >5;
});
console.log(filterB);

const b=[10, 15, 20, 3, 8, 65, 4, 98, 55, 18];
const filterB=b.filter((item, index, current)=>{
    return item < 25;
});
console.log(filterB);

const b=[10, 15, 20, 3, 8, 65, 4, 98, 55, 18];
const filterB=b.filter((item, index, current)=>{
    return item + index;
});
console.log(filterB);

const b=[10, 15, 20, 3, 8, 65, 4, 98, 55, 18];
const filterB=b.filter((item, index, current)=>{
    return item >20 + 4;
});
console.log(filterB);



//map
const nums=[41, 12, 01, 50, 56, 85, 98];
const numMap=nums.map(val=>val);
console.log(nums);
numMap.push(858);
console.log(numMap);

const user=[
    {id:100, mark:80},
    {id:101, mark:85},
    {id:102, mark:90},
    {id:103, mark:95}
];
const newUser=user.map(obj=>obj).filter(obj=>obj.mark >85);
console.log(newUser);
newUser.push(20);
console.log(newUser);

//reduce

let stud=[20,50,70, 30, 25,45];
let count=stud.reduce((a,b)=>{
    return a + b;
},0);
console.log(count);

let stud=[20,50,70, 30, 25,45];
let mult=stud.reduce((a,b)=>{
    return a * b;
},1);
console.log(mult);

let fee1=[15,20,50,120,560];
let fee2=[20,25,45,69,650];
let totalFee=[].concat(fee1, fee2).reduce((count, index)=>{
    return count + index;
},0);
console.log(totalFee);

let fee3=[15,20,50,120,560];
let fee4=[20,25,45,69,650];
let totalFee1=[...fee3, ...fee4];
let res =totalFee1.reduce((ind, it)=>{
 return ind+it;
},0);
console.log(res);



const hi =["helo", "hi", "wellcome", "by", "vay"];
const totalHi=hi.reduce((res, cur, ind)=>{
    return {...res,[cur]: ind}
}, {});
console.log(totalHi);



const saySome= [14,20,82,120,55,2,6];
const mySome=saySome.some(a => a>20);
console.log(mySome);

const saySome1= [14,20,82,120,55,2,6, "dear"];
const mySome1=saySome1.some(b =>typeof(b)==="number");
console.log(mySome1);
const every1 = saySome1.every(c=>typeof(c)==="number");
console.log(every1);

//find


let numbers =[100, 102, 105,150,65,98,250];
let numFind=numbers.find(item=>item<100);
console.log(numFind / 5);
const num2=numbers.findIndex(a=>a===150);
console.log(num2);


const a=[1,2,3,4];
const b=[1,2,3,4];
const c=[1,2,3,4];
console.log(a.fill(5, 2, 3));
a.fill(0,2,3);
console.log(a);
b.fill(7,1);
console.log(b);
c.fill("str");
c.fill([]);
console.log(c);

//fill
const number1=[55,45,20,89,01,02,65];
const number2=[25, 63, 89, 25, 124, 987];
const number3=[20,65,96,99,302,210,65];
console.log(number1.fill(10, 3, 5));
number2.fill(45,0,2);
console.log(number2);
number3.fill("good", 6);
console.log(number3);




