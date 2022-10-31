const date = new Date();
console.log(date);


 function refreshTime() {
    const dateString = new Date();
    const timeDisplay = document.getElementById("date").textContent = dateString;;
   
    
  }
    setInterval(refreshTime, 10);