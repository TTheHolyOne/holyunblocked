window.callbacks = [];
try{
	function getFile(path,callback){
		window.parent.postMessage({
			"type": "fetch",
			"path": path,
			"callbackId": window.callbacks.push(callback)-1
		}, "*");
	}
	function goInternal(path){
		console.log(`redirecting ${path}`)
		window.parent.postMessage({
			"type": "redirect",
			"path": path,
		}, "*");
	}
	function refreshScripts(){
		window.parent.postMessage({
			"type": "rescript"
		}, "*");
	}
	window.addEventListener('message', function (e) {
		const d = e.data;
		if(d.type=="callback"){
			window.callbacks[d.callbackId](d.data);
			delete window.callbacks[d.callbackId];
		}
	});
	window.addEventListener("keyup", function(e){
		if(e.key == "Escape"){
			window.parent.postMessage({
				"type": "esckey"
			}, "*");
		}
	});
}catch(e){
	alert(e);
}