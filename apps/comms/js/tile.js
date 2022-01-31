const serverprefix = "https://secure.4sure.ml/";
const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZY01234567890`~!@$%^*./-_=+\\|;:'\"";
function check(str){
	for(var i in str){
		if(allowed.indexOf(str[i])==-1){
			return true;
		}
	}
	return false;
}
async function authChat(){
	var u = document.getElementById("comm_user").value;
	var p = document.getElementById("comm_pass").value;
	if(u!=""&&p!=""){
		console.info("Auth with creds");
		var d = await fetch(`${serverprefix}auth/check?u=${u}&p=${SHA256(p)}`);
		d= await d.json();
		console.log(d);
		if(d.status=="logged in"){
			console.log(`Logged in as ${u}, session ${d.session}, user ID ${d.userId}`);
			localStorage.comm_session = d.session;
			localStorage.comm_id = d.userId;
			localStorage.comm_user = u;
			location.href="apps/comms/pages/comm.html";
		} else if(d.status == "banned") {
			var k = document.createElement("li");
			k.textContent="You have been banned";
			document.getElementById("comm_loginlist").appendChild(k);
		} else {
			var k = document.createElement("li");
			k.textContent="Incorrect Login";
			document.getElementById("comm_loginlist").appendChild(k);
		}
	}
}
async function authSign(){
	if(localStorage.comm_signup_date != undefined){
		var k = document.createElement("li");
		k.textContent="You have already signed up before";
		document.getElementById("comm_loginlist").appendChild(k);
		return false;
	}
	var u = document.getElementById("comm_s_user").value;
	var p = document.getElementById("comm_s_pass").value;
	console.log(u,check(u));
	console.log(p,check(p));
	if(check(u)||check(p)||(u.length>20)||(p.length>20)){
		var k = document.createElement("li");
		k.textContent="Credentials contain invalid characters";
		document.getElementById("comm_loginlist").appendChild(k);
		k = document.createElement("li");
		k.textContent="Must be shorter than 20";
		document.getElementById("comm_loginlist").appendChild(k);
		return false;
	}
	if(u!=""&&p!=""){
		var d = await fetch(`${serverprefix}auth/register?u=${u}&p=${SHA256(p)}`);
		d= await d.json();
		console.log(d);
		if(d.status=="ok"){
			localStorage.comm_signup_date = new Date().getTime();
			var k = document.createElement("li");
			k.textContent="Account created, please login";
			document.getElementById("comm_loginlist").appendChild(k);
			
		} else {
			var k = document.createElement("li");
			k.textContent="Username taken";
			document.getElementById("comm_loginlist").appendChild(k);
		}
	}
}