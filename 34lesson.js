 const tabBtns = document.querySelectorAll(".tab_btn");
 const tabBodys=document.querySelectorAll(".tab_body");
// tabBtns.forEach((btn, index)=>{
// btn.addEventListener("click", ()=>{
// tabBtns.forEach((btn,index)=>{
//     btn.classList.remove("tab_btn-active");
//     tabBodys[index].classList.remove("tab_body-active");
// });
// btn.classList.add("tab_btn-active");
// tabBodys[index].classList.add("tab_body-active");
// });
// });

//we make tabes with containt
//2-rd tarberak
// for(let i=0; i<tabBtns.length; i++){
//     tabBtns[i].addEventListener("click", ()=>{
//         for(let x=0; x<tabBtns.length;x++){
//             tabBtns[x].classList.remove("tab_btn-active");
//             tabBodys[x].classList.remove("tab_body-active");

//         }
//         tabBtns[i].classList.add("tab_btn-active");
//             tabBodys[i].classList.add("tab_body-active");
//     });
// }



// for(let i=0; i<tabBtns.length; i++){
//     tabBtns[i].addEventListener("click", ()=>{

//         for(let x=0; x<tabBtns.length;x++){
//              tabBtns[x].classList.remove("tab_btn-active");
//             //tabBodys[x].classList.remove("tab_body-active");

//         }
//         tabBtns[i].classList.add("tab_btn-active");
//             tabBodys[i].classList.add("tab_body-active");
//     });
// }

let x = 0;
for(let j = 0; j < tabBtns.length; j++){
tabBtns[j].addEventListener("click", () => {
  tabBtns[x].classList.remove("tab_btn-active");
  tabBodys[x].classList.remove("tab_body-active");
  tabBtns[j].classList.add("tab_btn-active");
  tabBodys[j].classList.add("tab_body-active");
  j= x;
});
} 