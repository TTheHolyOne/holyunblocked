const urlq = new URLSearchParams(
	(parent.document.getElementsByTagName("iframe")[0].src+"").split("?")[1]
);
const surl= "https://ytdl.4sure.ml/search";
const q = urlq.get("q");
if(q!=undefined){
	(async function(){
		try{
			var d = await fetch(surl+"?q="+q);
		}catch(e){
			document.getElementById("vwrap").textContent = "failed to fetch, server offline";
		}
		d= await d.json();
		console.log(d);
		handleData(d);
	})();
}
function handleData(d){
	const vm = "search_metadata";
	document.getElementById("seterm").textContent = `Searched for ${d[vm]["query"]}, corrected to ${d[vm]["corrected_query"]}, ${d[vm]["estimated_results"]} results`;
	const v = d["videos"];
	for(var i in v){
		var div = document.createElement("div");
		div.setAttribute("onclick", `goInternal("watch.html?id=${v[i]["id"]}")`);
		div.innerHTML = `<h4>${v[i]["title"]}</h4><p class="vdesc">${v[i]["description"]}</p><p class="sub_d">${v[i]["author"]} - ${v[i]["metadata"]["published"]} - ${v[i]["metadata"]["duration"]["simple_text"]}</p>`;
		document.getElementById("vwrap").appendChild(div);
	}
}