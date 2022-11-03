var form = document.getElementById("form");
var username = document.getElementById("exampleInputEmail1");
var password = document.getElementById("exampleInputPassword1");
var a = 0;
var store = JSON.parse(localStorage.getItem("Details"));
console.log(store);

form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput();
});
 checkinput=()=> {
    var usernameget = username.value.trim();
    var passwordget = password.value.trim();
    if (usernameget == "") {
        setError(username, "Plz fill the mail id");
    }
    else {
        setSuccess(username, "");
        if (passwordget == "") {
            setError(password, "plz fill the password id");
        } else {
            setSuccess(password, "");


            store.forEach(element => {
                console.log("usr");
                if (usernameget === element.email) {
                    console.log("dooo");
                    a = 1;
                    if (passwordget === element.password) {
                        console.log("yes");
                        setSuccess(password, "");
                        alert("dd")
                        window.location="dash.html"
                    }
                    else {
                        setError(password, "invalid password");
                    }
                }

            })

            if (a === 0) {
                setError(username, "invalid username or mailid ");

            }

        }
    }

}
setError=(input, message) =>{
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.className = "mb-3"; //error css
    paragraph.innerText = message;
}

setSuccess=(input, message) =>{
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.clasname = "mb-3";
    paragraph.innerText = message;

}