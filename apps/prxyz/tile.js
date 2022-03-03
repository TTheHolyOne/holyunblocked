document.getElementById("prxyz_select").addEventListener("change", function(){
	if(localStorage.prxyzPreflight==1){
		goInternal("get.html?id="+document.getElementById("prxyz_select").selectedIndex);
	} else {
		localStorage.prxyzPreflight=1;
		goInternal("preflight.html?id="+document.getElementById("prxyz_select").selectedIndex);
	}
});