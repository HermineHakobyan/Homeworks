// Տնային աշխատանք, 

// 1. js-ով ստուգում ենք անում, որ յուզեռը ամեն 100 պիքսելը մեկ սքրոլ անելուց բոդօօ 
// գույնը փոխվի, բոդիի բարձրությունը դնում եք 1000 պիքսել, այսինքն որ 10 անգամ բոդիյի գույնը փոխվի

// 2․ գույների համար ստեղծում եք ֆունկցիա, որը գեներացնելու ա ռանդոմ գույներ

// 3․ էնպես եք անում, որ երբ որ յուզեռը սքրոլ անի մինչև ամենավերջ կնոպկա հայտնվի,
//  որը թույլ կտա որ յուզեռը վերադառնա սկիզբ




const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);

  
const changColor = () =>{
    const randomColor = Math.floor(Math.random()* 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + "200px" + randomColor;
};
scrollToTopBtn.addEventListener("click", changColor);
changColor();




