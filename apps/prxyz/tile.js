document.getElementById("prxyz_select").addEventListener("change", function(){
	if(localStorage.prxyzPreflight==1){
		location.href="apps/prxyz/get.html?id="+document.getElementById("prxyz_select").selectedIndex;
	} else {
		location.href="apps/prxyz/preflight.html?id="+document.getElementById("prxyz_select").selectedIndex;
		localStorage.prxyzPreflight=1;
	}
});