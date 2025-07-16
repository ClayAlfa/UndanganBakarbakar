// owl carousel start
$(document).ready(function () {
  // Modern gallery initialization - using CSS Grid instead of Owl Carousel
  // Owl carousel removed for modern grid layout
});
// owl carousel end

// copy start
const salin1 = document.getElementById("salin1");

// Modern copy functionality moved to modern-effects.js
// copy end

// waktu start
const countDownDate = new Date("Jun 14, 2025 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
    document.getElementById("hari").innerHTML = "0";
    document.getElementById("jam").innerHTML = "0";
    document.getElementById("menit").innerHTML = "0";
    document.getElementById("detik").innerHTML = "0";
  }
}, 1000);
// waktu end

// modal start
window.onload = function () {
  // Show modal after loader
  setTimeout(() => {
    document.getElementById("klikmodal").click();
  }, 2500);
};
// modal end

// lagu start
// Audio functions moved to modern-effects.js
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// Modern hover effects handled in CSS and modern-effects.js
// undngan end
