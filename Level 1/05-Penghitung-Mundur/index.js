function mulaiPenghitungMundur() {
  const inputJam = parseInt(document.getElementById("inputJam").value) || 0;
  const inputMenit = parseInt(document.getElementById("inputMenit").value) || 0;
  const inputDetik = parseInt(document.getElementById("inputDetik").value) || 0;

  var totalDetik = inputJam * 3600 + inputMenit * 60 + inputDetik;
  if (totalDetik <= 0) {
    alert("Masukkan waktu yang valid.");
    return;
  }
  var endTime = Date.now() + totalDetik * 1000;
  var x = setInterval(function () {
    var now = Date.now();
    var distance = endTime - now;

    var remainingHours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var remainingMinutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    var remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("waktuTersisa").innerHTML =
      (remainingHours < 10 ? "0" + remainingHours : remainingHours) +
      ":" +
      (remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes) +
      ":" +
      (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("waktuTersisa").innerHTML = "Waktu habis!";
    }
  }, 1000);
}
