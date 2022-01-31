const server = "https://secure.4sure.ml";
(async function(){
	if(location.href.indexOf("file://") == -1){
		document.getElementById("noguard_stat").textContent = "NOT WORKING";
		document.getElementById("noguard_stat").classList.add("red");
	} else {
		document.getElementById("noguard_stat").textContent = "Online";
		document.getElementById("noguard_stat").classList.add("green");
	}
	var k = undefined;
	try{
		k = await fetch(server+"/ping");
		k=await k.json();
		document.getElementById("server_stat").textContent = "Online";
		document.getElementById("server_stat").classList.add("green");
	}catch(e){
		document.getElementById("server_stat").textContent = "Offline";
		document.getElementById("server_stat").classList.add("red");
	}
	if(k!=undefined){
		if(k.codetype != "01-orginal"){
			document.getElementById("crypt_stat").textContent = `Outdated, upgrade to ${k.codetype}`;
			document.getElementById("crypt_stat").classList.add("red");
		} else {
			document.getElementById("crypt_stat").textContent = `Up to date`;
			document.getElementById("crypt_stat").classList.add("green");
		}
	} else {
		document.getElementById("crypt_stat").textContent = "Unable to check";
		document.getElementById("crypt_stat").classList.add("red");
	}
})();