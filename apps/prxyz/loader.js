const urlq = new URLSearchParams(window.location.search);
const id = urlq.get("id");
window.onerror = function(message, source, lineno, colno, error) {
	document.getElementById("info").innerHTML = `Critical Exception with ruffle
	${message} in ${source}`;
};
if(id==undefined){
	document.getElementById("info").textContent = "missing id/title";
} else{	document.getElementById("gamewrap").innerHTML = `<iframe src="https://devioustrolling.com/"></iframe>`;
} 