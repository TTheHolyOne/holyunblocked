window.apps["comms"] = {};
window.apps["comms"]["tile"] = `<div class="box_widget">
	<div>
		<h3>HolyChat</h3>
	</div>
	<div>
		<ul class="list" id="comm_loginlist">
			<li>Login:</li>
			<li><input id="comm_user" class="minize" placeholder="username" /></li>
			<li>
				<input type="password" id="comm_pass" class="minize" placeholder="password" /><button
					class="btn-primary minize floatright smaller"
					onclick="authChat()"
				>
					login
				</button>
				<br>
			</li>
			<li>Sign Up:</li>
			<li><input id="comm_s_user" class="minize" placeholder="username" /></li>
			<li>
				<input type="password" id="comm_s_pass" class="minize" placeholder="password" /><button
					class="btn-primary minize floatright smaller"
					onclick="authSign()"
				>
					sign up
				</button>
				<br>
			</li>
		</ul>
	</div>
	<script src="apps/comms/js/sha256.js"></script>
	<script src="apps/comms/js/tile.js"></script>
</div>`;