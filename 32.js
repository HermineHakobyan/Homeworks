// Տնային աշխատանք 32

// 1․ ստեղծում եք 2 հատ դիվ, տարբեր գույների, ու tocuhEvent-ով էնպես եք անում, որ նախ դիվերը հնարավոր լինի տեղաշարժել,
//  ու բացի տեղաշարժելուց, երբ որ դիվերը կպնեն իրար թեկուզ 1պիքսելով պետք ա գույները փոխվեն, այսինքն առաջին դիվի գույնը գնա երկրորդ դիվին,
//   երկրորդ դիվի գույնը առաջին դիվին

// 2․ ստեղծում եք առանձին դիվ, որը պետք ա կլոր լինի, ու բրաուզերի իվենթների միջոցով (drag) որոնք չենք անցել, 
// պետք է անեք այնպես որ կլորը կարողանաք տեղափոխել ու ձեր դրած տեղը դնել 

  
const first =document.getElementById("first");

first.addEventListener("touchmove",(ev)=>{
    const x= ev.touches[0].clientX,
    y=ev.touches[0].clientY;
    
    ev.target.style.cssText =`
    transform: translateX(${x}px) translateY(${y}px);
    `;
    
    });
    const second =document.querySelector("#second");
    second.addEventListener("touchmove", (e)=>{
        const x=e.touches[0].clientX,
        y=e.touches[0].clientY;

        e.target.style.cssText =`
        transform: translateX(${x}px) translateY(${y}px) `;

    });
  if(first.clientX === second.clientX || first.clientY === second.clientY){
    first.style.cssText +=`background:rgb(214, 103, 103) `;
    second.style.cssText +=`background: rgb(44, 44, 78)`;

  }

//chstatsvets

let dragged;
document.addEventListener("drag",()=>{
    console.log("dragging");
});
document.addEventListener("dragstart",(ev)=>{
    dragged=ev.target;
    ev.target.classList.add("dragging");
});
document.addEventListener("dragend", (ev)=>{
    ev.target.classList.remove("dragging");
});
document.addEventListener("drop", (event) => {
    
    event.preventDefault();
    
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  });