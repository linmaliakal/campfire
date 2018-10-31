

function switchTest(){
  var testBox = document.getElementById("GeoLocation");
  var text = document.getElementById("test").innerHTML;

if (testBox.checked == true){
  document.getElementById("test").innerHTML = "Checked";
}
else{
  document.getElementById("test").innerHTML = "UnChecked";

}
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess,onFail, {
    timeout: 15000,
    enableHighAccuracy: true
    });
}

function onSuccess(location) {
    var myLatitude = location.coords.latitude;
    var myLongitude = location.coords.longitude;
    var mySpeed = location.coords.speed;
    var myTimeStamp = location.timestamp;

    document.getElementById("latitude").innerHTML = "My Latitude is " + myLatitude;
    document.getElementById("longitude").innerHTML = "My Longitude is " + myLongitude;
    document.getElementById("speed").innerHTML = "My Speed is " + mySpeed;
    document.getElementById("timestamp").innerHTML = "My TimeStamp is " + myTimeStamp;
}

function onFail(error) {
  document.getElementById("speed").innerHTML = "Please Enable GeoLocation";

}

function getWatchID() {
  watchID = navigator.geolocation.watchPosition(onSuccess, onFail,
  {
        enableHighAccuracy: true
      });

      return watchID
}

function toggleWatchID(){
   var testBox = document.getElementById("GeoLocation");
   if (testBox.checked == true) {
     watchID = getWatchID();
     console.log("watchID = "+watchID);
     document.getElementById("test").innerHTML ="Works";
   }

   else {
      navigator.geolocation.clearWatch(watchID);
      console.log("clear watch..."+watchID);
      document.getElementById("test").innerHTML = "else"
   }

}
