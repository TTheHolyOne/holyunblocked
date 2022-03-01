function nodeScriptReplace(node) {
	if (nodeScriptIs(node) === true) {
		node.parentNode.replaceChild(nodeScriptClone(node), node);
	} else {
		var i = -1,
			children = node.childNodes;
		while (++i < children.length) {
			nodeScriptReplace(children[i]);
		}
	}

	return node;
}
function nodeScriptClone(node) {
	var script = document.createElement('script');
	script.text = node.innerHTML;

	var i = -1,
		attrs = node.attributes,
		attr;
	while (++i < attrs.length) {
		script.setAttribute((attr = attrs[i]).name, attr.value);
	}
	return script;
}

function nodeScriptIs(node) {
	return node.tagName === 'SCRIPT';
}
function pushApp(html){
	var div = document.createElement("div");
	div.innerHTML = html;
	document.getElementsByClassName("applist")[0].appendChild(div.children[0]);
	nodeScriptReplace(document.getElementsByClassName("applist")[0].children[document.getElementsByClassName("applist")[0].children.length-1]);
}
(async function(){
	const a =  window.apps;
	const c = window._config.apps;
	for(var i = 0;i<c.length;i++){
		//console.log(a[c[i]]);
		if(a[c[i]] != undefined){
			pushApp(a[c[i]]["tile"]);
		} else {
			//console.log("waiting");
			await new Promise(resolve => setTimeout(resolve, 100));
			//console.log("stopped waiting");
			i--;
			continue;
		}
	}
})();