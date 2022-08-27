const poster = document.querySelector("header img");
const advs = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.getElementById("films");
const form = document.querySelector("#add");
const singInModalBtn=document.querySelector("[data-in]");
const singInModal=document.querySelector("[data-in-modal]");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde","Reservoir Dogs", "Crid",
		"Doctor Zhivago", "The Deer Hunter", "Rocky"
	]
};


function init () {
	advs.forEach(adv => adv.remove());
	poster.src = "bg2.jpg";
	if (poster.src.slice(31) === "bg1.jpg") {
		poster.alt = "GEMINI MAN";
	} else {
		poster.alt = "Hitman's wife's bodyguard";
	}
	document.title = poster.alt;
}
init();




form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	val =val[o].toUpperCase()+ val.slice(1).toLowercase();
	const check = document.querySelector("input[name='favorite']");
   
	if (val !== "" && val !== "<" && val !== ">" && val !== "/" && val !== "?") {
		if (check.checked) {
			_DB.movies.push({filmName:val, check:true});
			console.log(`This film <${val}>  added to favorite`);
        
		}_DB.movies.push({filmName: val, check:false});
		_DB.movies.push(val);
	}

	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);
    //zroyatsnel
	e.target.reset();
});

function setSort(arr) {
	arr.sort();
}
function createFilmsList (filmsArr, parent) {
	parent.innerHTML = "";
	setSort(filmsArr);
	filmsArr.forEach((film, index) => {

		if(typeof(film)==="object" && film.check===true){
			//setSort(filmsArr);
		parent.innerHTML += `
		//<p style="color:blue">
			${index + 1}. 
			${film.length >= 21 ? film.slice(0, 21)+'...' : film}
			<span data-rm>&#128465</span>
			
		</p>
	`;
		}else{
			parent.innerHTML +=`
			<p>
			${index +1}. ${film.length >= 21? film.slice(0,21)+'...': film}
			<span data-rm>&#128465</span>
			</p>`
		}
	});

	removeFilmFromList('[data-rm]');
	
}
function removeFilmFromList (selector) {
	setSort(_DB.movies);
	document.querySelectorAll(selector).forEach((btn, index) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(index, 1);
			createFilmsList(_DB.movies, filmsBlock);
		});
	});
}

createFilmsList(_DB.movies, filmsBlock);


singInModalBtn.addEventListener("click", (e) =>{
	e.preventDefault();
	singInModal.classList.add("modal_wrapper-active");
});
window.addEventListener("mouseup", (e)=>{
	if(e.target !== singInModal.querySelector("form")){
	singInModal.classList.remove("modal_wrapper-active");
	}
});

//elem.classList.method()
//add()=> avelatsnum enq class
//remove()=> jnjum enq class@
//toggle()=> class ka chka
//contains()=> stugum e arkayutyun@ classi ` true\false
//item()=> veradardznum e classi anun@ @st indexi =. array
//classlist =>DOMtokenlist =>[]


//const some= document.getElementById("some");
//some.classList.add("first", "second", "third");
// //some.classList.remove("first", "second", "third");
// console.log(some.classList.item(0));


//nayelu 
// const clickMe= document.getElementById("clickme");
// clickMe.addEventListener("click", function (){
	//this.claasList.toggle("light");
// 	if(!this.classList.contains("light")){
// 		this.classList.add("light");
// 	}else{
		//this.removeAttribute("class");
// 		this.classList.remove("light");
// 	}
// });

//contains-@ veradardznum e true kam false, aysinqn ayd classn uni te voch
//console.log(some.classList.contains("first"));

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	const check = document.querySelector("input[name='favorite']");
  
	if (val !== "" && val !== "<" && val !== ">" && val !== "/" && val !== "?") {
	  if (check.checked) {
		console.log(`This film <${val}> added to favorite`);
	  }
	  _DB.movies.push(val);
	}
  
	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);
	e.target.reset();
  });
  function setSort(arr) {
	arr.sort();
  }
  function createFilmsList(filmsArr, parent) {
	parent.innerHTML = "";
	setSort(filmsArr);
	filmsArr.forEach((film, index) => {
	  parent.innerHTML += `
			  <p>
				  ${index + 1}. 
				  ${film.length >= 21 ? film.slice(0, 21) + '...' : film}
				  <span data-rm>&#128465</span>
			  </p>
		  `;
	});
  
	removeFilmFromList('[data-rm]');
  
  }
  function removeFilmFromList(selector) {
	setSort(_DB.movies);
	document.querySelectorAll(selector).forEach((btn, index) => {
	  btn.addEventListener("click", () => {
		btn.parentElement.remove();
		_DB.movies.splice(index, 1);
		createFilmsList(_DB.movies, filmsBlock);
	  });
	});
  }
  createFilmsList(_DB.movies, filmsBlock);