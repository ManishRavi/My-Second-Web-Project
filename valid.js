function valid() {
    let e1 = localStorage.getItem("user1");
    let e2 = JSON.parse(e1);
    let e = document.getElementById("e-mail id").value;
    let p = document.getElementById("password").value;
    try {
        if (e2.password == p && e2.mail == e) {
            alert("Login Successful");
            window.open("myhtml.html");
        } else {
            alert("Invalid Login");
        }

    } catch (e) {

        alert("Invalid Login");
        window.location.reload();

    }


}