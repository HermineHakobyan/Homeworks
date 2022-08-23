const poster = document.querySelector("header img");
const advs = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.getElementById("films");
const form = document.querySelector("#add");

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



// ողջույն տնային աշխատանք 31

// 1․ եթե օգտատերը նշում ա որ ֆիլմը ֆավորիտ ա, ապա ֆիլմի անունի գույնը պետք ա փոխվի, այսինքն ցուցակում պետք ա տարբերբեն այն ֆիլմերը որոնք ֆավորիտ են

// 2․ ստեղծում եք ֆունկցիոնալ, որ ցուցակում 20ից ավել ֆիլմ չլինի, բայց ֆիլմերը պահպանվեն տվյալների բազայում, ու ամեն մուտքի ժամանակ ֆիլմերի 
// անունները պետք ա ռանդոմ ցույց տա էդ 20 հատի մեջ,
//  եթե 20ից քիչ են ֆիլմերը ապա ռանդոմը չպետք ա աշխատի, ռանդոմի ժամանակ պետք ա նորից սորտավորվեն