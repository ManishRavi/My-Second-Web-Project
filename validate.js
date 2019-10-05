function validate() {
	if (/^[a-zA-Z]{1,15}$/.test(document.getElementById("username").value)) {
		console.log('correct username');
		if (/(.com|.in|.uk)$/.test(document.getElementById("e-mail id").value)) {
			console.log('correct e-mail id');
			if (/^[a-zA-Z0-9]{8,15}$/.test(document.getElementById("password").value)) {
				console.log('correct password');
				if (document.getElementById("password").value == document.getElementById("confirm password").value) {
					console.log('password confirmed');
					if (/\w{10}/.test(document.getElementById("mobile number").value)) {
						console.log('correct mobile number');
						var obj = {
							'name': document.getElementById("username").value,
							'mail': document.getElementById("e-mail id").value,
							'password': document.getElementById("password").value,
							'confirm password': document.getElementById("confirm password").value,
							'mobile number': document.getElementById("mobile number").value,

						}
						let user1 = JSON.stringify(obj);
						localStorage.setItem("user1", user1);
						sessionStorage.setItem("user1", user1);
						window.open("signin.html");
					}
				}
			}
		}
	}
}