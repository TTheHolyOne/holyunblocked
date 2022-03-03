var socket = io("https://ytdl.4sure.ml");
const urlq = new URLSearchParams(
	(parent.document.getElementsByTagName("iframe")[0].src+"").split("?")[1]
);
const id = urlq.get("id");
console.update = function(m){
	document.getElementById("linfo").textContent = m;
}
if(id!=undefined){
	socket.emit("req", {
		id: id
	});
}
socket.on("meta", (data)=>{
	if(data.for == socket.id){
		console.log(data);
		document.getElementById("meta").innerHTML = `${data.title} by ${data.author}<br>${data.desc}<br>${data.likes} likes, published on ${data.date}`
    }
})
socket.on("message", (data)=>{
	if(data.for == socket.id){
		console.update(data.txt);
    }
});
socket.on("finish", (data) => {
    if(data.for == socket.id){
        var video = document.createElement("video");
        var src = document.createElement("source");
        src.setAttribute("src", "https://ytdl.4sure.ml/video/"+data.path);
        src.setAttribute("type", "video/mp4");
        video.appendChild(src);
        video.setAttribute("controls", "true");
        document.getElementById("videowrapper").appendChild(video);
    }
})