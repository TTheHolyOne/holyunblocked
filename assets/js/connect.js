console.log=function(m){
	document.getElementById("m").textContent=document.getElementById("m").textContent+"\n"+m;
	return true;
}
function encode(str, secret){
  var encoded = "";
  for (i=0; i<str.length;i++) {
    var a = str.charCodeAt(i);
    var b = a ^ secret;
    encoded = encoded+String.fromCharCode(b);
  }
  return encoded;
}
console.log("okokokok");
var d = new Date();
console.log(d.getTime());
socket.emit("msg", {
	msg: encode("hello world", d.getTime()),
	time: d.getTime()
});
