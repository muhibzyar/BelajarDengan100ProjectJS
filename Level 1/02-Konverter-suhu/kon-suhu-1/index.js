function hasil() {
  const nilaiInput = parseFloat(document.getElementById("nilaiInput").value);
  const satuanInput = document.getElementById("satuanInput").value;
  const satuanOutput = document.getElementById("satuanOutput").value;

  let hasil;

  if (isNaN(nilaiInput)) {
    document.getElementById("hasil").value =
      "Error: Masukkan angka yang valid.";
    return;
  }

  // celsius
  if (satuanInput === "celsius" && satuanOutput === "fahrenheit") {
    const hasil = (nilaiInput * 9) / 5 + 32;
    document.getElementById("hasil").value = hasil.toFixed(2) + " °F";
  } else if (satuanInput === "celsius" && satuanOutput === "kelvin") {
    const hasil = nilaiInput + 273.15;
    document.getElementById("hasil").value = hasil.toFixed(2) + " K";
  } else if (satuanInput === "celsius" && satuanOutput === "celsius") {
    document.getElementById("hasil").value = nilaiInput.toFixed(2) + " °C";
  }

  // fahreinheit
  else if (satuanInput === "fahrenheit" && satuanOutput === "celsius") {
    const hasil = ((nilaiInput - 32) * 5) / 9;
    document.getElementById("hasil").value = hasil.toFixed(2) + " °C";
  } else if (satuanInput === "fahrenheit" && satuanOutput === "kelvin") {
    const hasil = ((nilaiInput - 32) * 5) / 9 + 273.15;
    document.getElementById("hasil").value = hasil.toFixed(2) + " K";
  } else if (satuanInput === "fahrenheit" && satuanOutput === "fahrenheit") {
    document.getElementById("hasil").value = nilaiInput.toFixed(2) + " °F";
  }

  // kelvin
  else if (satuanInput === "kelvin" && satuanOutput === "celsius") {
    const hasil = nilaiInput - 273.15;
    document.getElementById("hasil").value = hasil.toFixed(2) + " °C";
  } else if (satuanInput === "kelvin" && satuanOutput === "fahrenheit") {
    const hasil = ((nilaiInput - 273.15) * 9) / 5 + 32;
    document.getElementById("hasil").value = hasil.toFixed(2) + " °F";
  } else if (satuanInput === "kelvin" && satuanOutput === "kelvin") {
    document.getElementById("hasil").value = nilaiInput.toFixed(2) + " K";
  }
}
