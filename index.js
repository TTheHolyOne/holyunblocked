const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const fs = require("fs");
const http = require('http');
const server = http.createServer(app);
const { v4: uuidv4 } = require('uuid');
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});
const filenames = ['', '/', 'downloads', 'plugins', 'posts', 'reviews', 'sites', 'games', 'bookmarklets', '.css', '.gif', '.png', '.jpg', '.txt', '.js', '.md', '.html', '.env', '.svg'];
const ppl = {};
//const users = [
//"u": "i10", "p": "408f31d86c6bf4a8aff4ea682ad002278f8cb39dc5f37b53d343e63a61f3cc4f", "b":false /* 'bruh' sha256'd */}
var users = {cheese: "relable"}
function decode(m,s){
	//console.warn(`decoding ${m} from secret ${s}`);
	var decoded = "";
	for(var i = 0; i<m.length; i++){
		var b = m[i].charCodeAt(0);
		//console.log(b);
		var a = b ^ s;
		//console.log(s);
		//console.log(String.fromCharCode(a));
		decoded = decoded+""+String.fromCharCode(a);
	}
	return decoded;
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
function banUser(u){
	var uid = false;
	for(var i in users){
		if(users[i]["u"] == u){
			uid = i;
		}
	}
	//console.log(uid);
	if(uid !== false){
		users[uid]["b"] = true;
		for(var i in sessions){
			if(sessions[i] == uid){
				delete sessions[i];
			}
		}
		return true;
	} else {
		return false;
	}
}
function spamScore(s){
	if(spam[s] == undefined){
		//console.log(`setting ${s} sS to 7, waiting for point back`);
		spam[s] = 7;
		setTimeout((function(ss){
			//console.log(`giving ${ss} score back`);
			spam[ss] = spam[ss]+1;
		}), 3000, s);
		return false;
	} else {
		if(spam[s]-1<1){
			spam[s] = spam[s]-1;
			setTimeout((function(ss){
				//console.log(`giving ${ss} score back (${spam[ss]+1})`);
				spam[ss] = spam[ss]+1;
			}), 8000, s);
			return true;
		} else {
			spam[s] = spam[s]-1;
			//console.log(`setting ${s} sS to ${spam[s]}, waiting for point back`);
			setTimeout((function(ss){
				//console.log(`giving ${ss} score back (${spam[ss]+1})`);
				spam[ss] = spam[ss]+1;
			}), 3000, s);
			return false;
		}
	}
}
function saveUsers(){
	fs.writeFileSync(__dirname+"/users.json", JSON.stringify(users));
}
var pk_users = JSON.stringify(users);
setInterval((function(){
	if(pk_users != JSON.stringify(users)){
		pk_users = JSON.stringify(users);
		saveUsers();
		console.log("saved");
	}
}), 10000)
var typers = [];
var spam = {};
function scrollToBottom(e){
	e.scrollTop = e.scrollHeight;
}
app.get('/', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/ping",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        time: new Date().getTime(),
        codetype: "01-orginal",
        code: 200
    });
});
var sessions = {};
app.get('/auth/check', (req, res) => {
    console.log("login route");
	res.header('Access-Control-Allow-Origin', '*');
	for(var i in users){
		var b = false;
		if(users[i]["u"]==req.query.u&&users[i]["p"]==req.query.p){
			b=i;
		}
	}
	if(b!==false){
		if(users[b]["b"]){
			res.send({
				"status": "banned"
			});
			return false;
		}
		for(var k in sessions){
			if(sessions[k] == b){
				res.send({
					"status": "logged in",
					"session": k,
					"userId": b
				});
				return true;
			}
		}
		var s = uuidv4();
		sessions[s] = b;
		res.send({
			"status": "logged in",
			"session": s,
			"userId": b
		});
	} else {
		res.send({
			"status": "no"
		});
	}
});
app.post("/auth/register",(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
	for(var i in users){
		if(users[i]["u"] == req.body.u){
			res.send({"status": "no"});
			return false;
		}
	}
	users.push({u: req.body.u, p: req.body.p});
	res.send({"status": "ok"});
});
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	for (let i in filenames) {
		if(req.path.match(".js")&&req.path.indexOf("compiled.js")==-1){
			res.send("<pre>NOOOOOOOOOOOO</pre>");
			return "";
		}
		if (req.path.match(filenames[i])) {
			res.sendFile(path.join(__dirname + req.path));
			break;
		}
		if (parseInt(i) + 1 == filenames.length) {
			res.sendFile(path.join(__dirname + req.path + '.html'));
		}
	}
});
io.on('connection', (socket) => {
	socket.on('disconnect', () => {
		delete ppl[socket.id];
		io.emit("leave", socket.id);
	});
});
io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		/*
		console.log(msg);
		console.log(decode(msg.msg,msg.time));
		console.log(sessions[msg.session]);
		console.log(users[sessions[msg.session]]["u"]);
		console.log(msg.name);
		*/
		if(sessions[msg.session]!=undefined){
			if(users[sessions[msg.session]]["u"] == msg.name){
				var s = spamScore(msg.session);
				if(s){
					return false;
					console.log("gonna do it anyway");
				}
				delete msg.session;
				var m = decode(msg.msg, msg.time);
				if(m[0] == "!" && m[1] == "v" && m[2] == "k" && m[3] == ":"){
					io.emit("message",msg);
					io.emit("message",{
						time: msg.time,
						msg: encode("Banning "+m.split(":")[1], msg.time),
						name: "System"
					});
					var k = banUser(m.split(":")[1]);
					var d = new Date().getTime();
					if(k == false){
						io.emit("message",{
							time: d,
							msg: encode("Failed to ban "+m.split(":")[1], d),
							name: "System"
						});	
					} else {
						io.emit("message",{
							time: d,
							msg: encode("Banned "+m.split(":")[1], d),
							name: "System"
						});
						io.emit("ban", {
							"user": m.split(":")[1],
							"initiator": "System"
						});
					}
				} else {
					io.emit("message",msg);
				}
			}
		}
	});
	socket.on("type", (data) => {
		
		if(sessions[data.session]!=undefined){
			if(users[sessions[data.session]]["u"] == data.name){
				delete data.session;
				io.emit("type",data);
			}
		}
	});
});
server.listen(8080, () => {
	console.log('listening on *:8080');
});
//app.use(express.static(__dirname + "/public"), (_, res, next) => {
 // res.status(404)
 // res.sendFile(__dirname + "/404.html")
//});