var d = new Date();
var time = d.getHours();

// time = 14;
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

if (time >= 19 && time <= 24 || time >= 0 && time < 4) {
  console.log("Night");
  document.querySelector('.moon').
    style.display = 'block';
  document.querySelector('.sun').
    style.display = 'none';
  document.querySelector('.wishme').
    innerText = 'Night';
}

//push notification
Notification.requestPermission(function (status) {
  console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: 'Good Day!',
        icon: 'images/Minion-Hello-icon.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      };
      reg.showNotification('Hello chinnu!', options);
    });
  }
}
