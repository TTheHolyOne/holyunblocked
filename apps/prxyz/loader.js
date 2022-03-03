const urlq = new URLSearchParams("?"+parent.document.getElementsByTagName("iframe")[0].getAttribute("src").split("?")[1]);
const id = urlq.get("id");
const nds = ["science", "math", "english", "geometry", "algebra", "physics", "writing", "reading"];
window.onerror = function(message, source, lineno, colno, error) {
	document.getElementById("info").innerHTML = `Critical Exception with ruffle
	${message} in ${source}`;
};
if(id==undefined){
	document.getElementById("info").textContent = "missing id/title";
} else {
	document.getElementById("gamewrap").innerHTML = `<iframe src="https://${nds[id]}.worldfall.ga"></iframe>`;
}