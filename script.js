var gunturLat = 16.3067;
var gunturLng = 80.4365;

var map = L.map("map").setView([gunturLat, gunturLng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([gunturLat, gunturLng])
  .addTo(map)
  .bindPopup("📍 Omnifood Andhra HQ<br>Serving Guntur & beyond!")
  .openPopup();
