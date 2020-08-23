var d = new Date();
var time = d.getHours();

if (time >= 4 && time < 12) {
  console.log("Morning")
  document.querySelector('.moon'). 
            style.display = 'none'; 
  document.querySelector('.sun'). 
            style.display = 'block'; 
  document.querySelector('.wishme'). 
            innerHTML = 'Morning';
  document.querySelector('.wishme'). 
            innerText = 'Morning';
}
if (time >= 12 && time < 16) {
    console.log("Afternoon")
  document.querySelector('.moon'). 
            style.display = 'none'; 
  document.querySelector('.sun'). 
            style.display = 'block';
  document.querySelector('.wishme'). 
            innerText = 'Afternoon';
}
if (time >= 16 && time < 19) {
    console.log("Evening")
 document.querySelector('.moon'). 
            style.display = 'none'; 
  document.querySelector('.sun'). 
            style.display = 'block'; 
  document.querySelector('.wishme'). 
            innerText = 'Evening';
}

if (time >= 19 && time <= 24 || time >=0 && time < 4 ) {
    console.log("Night");
 document.querySelector('.moon'). 
            style.display = 'block'; 
  document.querySelector('.sun'). 
            style.display = 'none';
  document.querySelector('.wishme'). 
            innerText = 'Night';
}
