const urlq = new URLSearchParams(window.location.search);
const f = urlq.get("f");
const n = urlq.get("n");
window.onerror = function(message, source, lineno, colno, error) {
	document.getElementById("info").innerHTML = `Critical Exception with ruffle
	${message} in ${source}`;
};
if(n==undefined||f==undefined){
	document.getElementById("info").textContent = "missing id/title";
} else {
	document.getElementById("gamewrap").innerHTML = `<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="675" height="400">
  <param name=movie value="${f}">
  <param name=quality value=high>
  <embed src="https://host.game.4sure.ml${f}" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="675" height="400">
  </embed> `
}