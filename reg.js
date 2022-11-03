
const role = document.getElementById("selec");
const mailid = document.getElementById("InputEmail1");
const username = document.getElementById("Inputusername");
const password = document.getElementById("InputPassword1");
const cpassword = document.getElementById("exampleInputPassword1");
let mobile=document.getElementById("Inputmobile");
const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var array = JSON.parse(localStorage.getItem("Details"));

// const checkbox= document.getElementById("checkbox");


form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput();
});

function checkinput() {
    const mailinput = mailid.value.trim();
    const usernameinput = username.value.trim();
    const passwordinput = password.value.trim();
    const cpasswordinput = cpassword.value.trim();
    let mobilenumber=mobile.value.trim();
    let len=length;
    const id=role.value;
   

    console.log(array);
    if (mailinput === "") {
        setError(mailid, "Plz fill the mail id");
    } else if (!valid.test(mailinput)) {
        setError(mailid, "Plz enter the valid mail id");
    } else {
        setSuccess(mailid, "");
        if (usernameinput === "") {
            setError(username, "Plz fill the user name");
        } else {
            setSuccess(username, "");
            if (passwordinput === "") {
                setError(password, "Plz fill the password");
            } else {
                setSuccess(password, "");
                if (cpasswordinput === "") {
                    setError(cpassword, "Plz fill the confirm password");
                } else {
                    setSuccess(cpassword, "");
                    if (passwordinput != cpasswordinput) {
                        setError(cpassword, "Passwords must be same");
                    } else {
                        setSuccess(cpassword, "");
                           if(mobilenumber===""){
                            setError(mobile, "Plz fill the mobilenumber");
                           }
                           else{        var  al=0;
                            if (array == null) {
                                len=1
                                let array = [];
                                let obj = {
                                    reg:len,
                                    role:id,
                                    email: mailinput,
                                    username: usernameinput, number:mobilenumber,
                                    password: passwordinput
                                   
                                };
                                array.push(obj);
                                localStorage.setItem("Details", JSON.stringify(array));
                                console.log("Null Side");
                                alert("success")
                                window.location="log.html"
                            } else {
                                console.log("dcc")
                                array.forEach(element => {
                                    if (mailinput === element.email) al++
                                        
                                    
                                });
                               
                                console.log("Inside 1");
                                if(al!=0){ 
                                alert("already have ")}
                                    
                                else{
                                    console.log("h")
                                   
                        
                                let obj = {
                                    id:len,
                                    role:id,
                                    email: mailinput,
                                    username: usernameinput,
                                    number:mobilenumber,
                                    password: passwordinput
                                    

                                };
                                array.push(obj);
                                console.log(array);
                                localStorage.setItem("Details", JSON.stringify(array));
                                alert("success fully reg");
                                window.location="log.html"
                            }}}
                        }
                


                    }
                }
            }
        }
    }


    


function setError(input, message) {
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.className = "mb-3.error"; //error css
    paragraph.innerText = message;
}

function setSuccess(input, message) {
    const formhead = input.parentElement;
    const paragraph = formhead.querySelector("p");
    formhead.clasname = "mb-3 success";
    paragraph.innerText = message;
}