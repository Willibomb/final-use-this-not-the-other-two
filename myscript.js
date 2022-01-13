


let url = 'https://animechan.vercel.app/api/available/anime';
fetch(url)
.then(response => response.json())
.then(data => printAll(data));

/*function printAll(data){
	console.log (data);
	//document.getElementById("listAll").innerHTML = data2;
}*/
//loading the servicesworker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
function printAll(data){
	let titles = data; // object containing all titles as keys
	let output = "<select id='titles' onchange='fetchTitle()'>";
	
	//add each breed to the output
	for (let currentTitle of titles){
        if (currentTitle != "") {
			output += "<option value='" + currentTitle + "'>" + currentTitle + "</option>";
		}
	}
	output += "</select>";

	titleList.innerHTML = output;
	
}

function fetchTitle(){
	let title = document.getElementById("titles").value;
	fetchRandom(title);
}

// get random qutoe based on anime
function fetchRandom(title) {
	let ranpa =[Math.floor(Math.random() * 1)];
	let url = "https://animechan.vercel.app/api/quotes/anime?title=" + title + "&page=" + ranpa;
	
	fetch(url)
    .then(response => response.json())
    .then(data2 => quoteAll(data2)
    );

} //

function fetchCharacter(){
	let title = document.getElementById("character").value;
	fetchRandom(character);
}

// get random qutoe based on character
function fetchCharacter(character) {
	let ranpa =[Math.floor(Math.random() * 1)];

	let url = "https://animechan.vercel.app/api/quotes/character?name=" + character + "&page=" + ranpa;
	
	fetch(url)
    .then(response => response.json())
    .then(data2 => quoteAll(data2)
    );
} //

function quoteAll(data2){
	console.log (data2);
	let ranum = [Math.floor(Math.random() * 9)];
	if (data2[ranum] != undefined){
	if(ranum == 0){
	document.getElementById("ohYeah").innerHTML = "Oh <strong>YEAH!</strong> I like that Onii-Sama~ keep pushing those buttons~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 1){
	document.getElementById("ohYeah").innerHTML = "Ohhh~ That's a very special spot you're pushing there~ You naughty naughty Onii-Chan~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 2){
	document.getElementById("ohYeah").innerHTML = "Ahhhh~~!! You're <em>very good</em> at pushing my buttons Onii-Chan~ Almost as if you're enjoying this~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 3){
	document.getElementById("ohYeah").innerHTML = "Onii-Chan~! You're too rough~~!!! You ecchi Hentai~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 4){
	document.getElementById("ohYeah").innerHTML = "Onii-Chan! My buttons are sensitive you know~ Aren't you enjoying this a little too much~?<br><em>Whisper: Don't worry, i am too~~</em>";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 5){
	document.getElementById("ohYeah").innerHTML = "Ahh~ Don't stop Onii-Chan~ Keep going and I'll cuuuu~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 6){
	document.getElementById("ohYeah").innerHTML = "Oh~ My~ God~~!! How are you this good at pressing buttons~? Have you been practicing behind my back~?";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 7){
	document.getElementById("ohYeah").innerHTML = "AHHH~!!! Slow down tiger~ I'm not going anywhere~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 8){
	document.getElementById("ohYeah").innerHTML = "Oh~ Onii-Chan~! That's <strong>so</strong> good, You don't know how long I've waited for you to do that to me~~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else if(ranum == 9){
	document.getElementById("ohYeah").innerHTML = "That hurts Onii-Chan! Even I get angry you know~ Not that I dislike it~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data2[ranum].anime + "<br> Character: " + data2[ranum].character + "<br> Quote: " + data2[ranum].quote;
	}else{
		document.getElementById("quoteAll").innerHTML = "Anime: " + data2[0].anime + "<br> Character: " + data2[0].character + "<br> Quote: " + data2[0].quote;
		document.getElementById("ohYeah").innerHTML = "Onii-Chan! My buttons are sensitive you know~ Aren't you enjoying this a little too much~?<br><em>Whisper: Don't worry, i am too~~</em>";
	}
}
}

function fetchTen() {
	let url = "https://animechan.vercel.app/api/quotes";
	
	fetch(url)
    .then(response => response.json())
    .then(data3 => quoteFive(data3)
    );
}
function quoteFive(data3){
	console.log (data3);
	if (data3[4] != undefined){
	document.getElementById("ohYeah").innerHTML = "Oh <strong>YEAH!</strong> That's my <em>Favourite</em> button Onii~chan, keep pushing that~";
	document.getElementById("quoteAll").innerHTML = "Anime: " + data3[0].anime + "<br> Character: " + data3[0].character + "<br> Quote: " + data3[0].quote + "<br><br>Anime: " + data3[1].anime + "<br> Character: " + data3[1].character + "<br> Quote: " + data3[1].quote
	+ "<br><br>Anime: " + data3[2].anime + "<br> Character: " + data3[2].character + "<br> Quote: " + data3[2].quote
	+ "<br><br>Anime: " + data3[3].anime + "<br> Character: " + data3[3].character + "<br> Quote: " + data3[3].quote
	+ "<br><br>Anime: " + data3[4].anime + "<br> Character: " + data3[4].character + "<br> Quote: " + data3[4].quote;
	}else{
		document.getElementById("quoteAll").innerHTML = "Oh no! It looks like that the request failed, please try clicking the button again or refreshing the page so we don't leave each other unsatisfied~";
	}
}

/*let url2 = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
fetch(url2)
.then(response => response.json())
.then(data4 => printFact(data4));

function printFact(data4){
	console.log(data4);
	let facts = data4.data; // object containing all facts as keys
	let output = "<select id='facts' onchange='fetchFact()'>";
	
	//add each fact to the output
	for (let currentFact of facts){

		output += "<option value='" + currentFact + "'>" + facts.anime_name + "</option>";
	}
	output += "</select>";
	factsList.innerHTML = output;
}

function fetchFact(){
	let facts = document.getElementById("facts").value;
	fetchFacts(facts);
}
function fetchFacts(facts) {

	let url = "https://anime-facts-rest-api.herokuapp.com/api/v1";
	
	fetch(url)
    .then(response => response.json())
    .then(data5 => quoteFact(data5)
    );
}

function quoteFact(data5){
	console.log (data5);
	document.getElementById("ohYeah").innerHTML = "Ohhh~ That's a very special button Onii-Sama~ Do it again~";
	document.getElementById("quoteAll").innerHTML = "yeshttps://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood";
}*/
