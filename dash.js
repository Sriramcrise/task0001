element = JSON.parse(localStorage.getItem("Details"));
length = element.length;


//TABLE INFORMATION
table = document.getElementById("mytable");
var com = ["reg","role","email", "username", "password", "condition",]
console.log("jbjj");
var ro = ["id","role","EMAIL ID", "USERNAME", "PASSWORD", "condition", "ACTION"];
//date
const date = new Date();
console.log(date);



function load() {
  console.log('element',element);

    for (var i = 0; i < 1; i++) {
        console.log("fffff");
        var data = document.getElementById("mytable");
        var newrow = data.insertRow();
        for (var j = 0; j < ro.length; j++) {
            console.log("gg");
            var cell = newrow.insertCell(j);
            cell.innerHTML = ro[j];

        }

    } for (var l = 0; l < length; l++) {
        var newrow = data.insertRow();
        for (var k = 0; k < com.length; k++) {
            console.log("j")
            var cell = newrow.insertCell(k);
            console.log('cell',cell);
            cell.innerHTML = Object.values(element[l])[k];


        }
        var cell = newrow.insertCell(k);
        cell.innerHTML = '<button class="btn btn-primary" onClick="edit(this)">Edit</button> <button class="btn btn-danger" onClick="onDelete(this)">Remove</button>'

    }
}

document.getElementById("date").textContent=date

function edit(t) {
   
    document.getElementById("jj").innerHTML = ' <label for="">MAILID</label><br><input type="text" id="f"><br> <label for="">NAME</label><br><input  type="text" id="g"><br> <label for="">PASSWORD</label><br><input type="text" id="h"><button class="btn btn-outline-primary" id="button" onClick="">clear</button> <button id="button" class="btn btn-outline-primary" onClick="upDate(this)">UPDATE</button>';
// ;document.getElementById("jj").innerHTML=date;


    rowindex = t.parentNode.parentNode.rowIndex;

    row_size = table.rows[rowindex].cells.count;

    selectedrow = (t.parentNode.parentNode.rowIndex) - 1;
    usermail = element[selectedrow].email;
    userperu = element[selectedrow].username;
    console.log("MAIlid: ", usermail);


    document.getElementById("f").value = element[selectedrow].email;
    document.getElementById("g").value = element[selectedrow].username;
    document.getElementById("h").value = element[selectedrow].password;

}

upDate=()=> {
  element = JSON.parse(localStorage.getItem("Details"));
  var email=document.getElementById("f").value.trim();
  var username=document.getElementById("g").value.trim();
  var password=document.getElementById("h").value.trim();
  
  element.forEach(element => {
  element.email=email;
  element.username=username;
  element.password=password;
  // rowindex =parentNode.parentNode.rowIndex;
  // // console.log(rowindex);
  var change=document.getElementById("mytable").rows[rowindex].cells;
  console.log("good")
  change[2].innerHTML=element.email;
  change[3].innerHTML=element.username;
   change[4].innerHTML=element.password;
   console.log(change)
  localStorage.setItem("Details",JSON.stringify([element]));
  })}



function refreshTime() {
    const dateString = new Date();
    const timeDisplay = document.getElementById("date").textContent = dateString;;
   
    
  }
    setInterval(refreshTime, 1000);