
function clearContent() {
	let contents = document.getElementsByClassName("content");
	for (let content of contents) {
		content.classList.add("hidden");
	}	
}

function displayHome() {
	clearContent();
	document.getElementById("normal-photobar").classList.remove("hidden");
	document.getElementById("home").classList.remove("hidden");
	document.getElementById("normal-footer").classList.remove("hidden");
}

function displayHistory() {
	clearContent();
	document.getElementById("history-photobar").classList.remove("hidden");
	document.getElementById("history").classList.remove("hidden");
	document.getElementById("normal-footer").classList.remove("hidden");
}

function displayMonthly() {
	clearContent();
	document.getElementById("normal-photobar").classList.remove("hidden");
	document.getElementById("monthly").classList.remove("hidden");
	document.getElementById("normal-footer").classList.remove("hidden");
}

function displayEvents() {
	clearContent();
	document.getElementById("normal-photobar").classList.remove("hidden");
	document.getElementById("events").classList.remove("hidden");
	document.getElementById("normal-footer").classList.remove("hidden");
}

function displayContact() {
	clearContent();
	document.getElementById("normal-photobar").classList.remove("hidden");
	document.getElementById("contact").classList.remove("hidden");
	document.getElementById("normal-footer").classList.remove("hidden");
}
