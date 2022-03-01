(function(){
	const d = window._config;
	window.apps={};
	for(var i in d.apps){
		var s = document.createElement("script");
		s.setAttribute("src", `../../apps/${d.apps[i]}/config.js`);
		document.body.appendChild(s);
	}
	var s = document.createElement("script");
	s.setAttribute("src", `../../assets/js/loadapps.js`);
	document.body.appendChild(s);
})();