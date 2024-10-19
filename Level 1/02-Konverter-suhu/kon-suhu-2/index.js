function updateUnit(radio, unit) {
  const celciusInput = document.getElementById("Celcius");
  const value = celciusInput.value;

  document.getElementById("outputCelcius").value = "";
  document.getElementById("outputFahrenheit").value = "";
  document.getElementById("outputReamur").value = "";
  document.getElementById("outputRankine").value = "";
  document.getElementById("outputKelvin").value = "";

  if (radio.checked) {
    const temp = parseFloat(value) || 0;
    switch (unit) {
      case "C":
        document.getElementById("outputCelcius").value = temp.toFixed(2);
        document.getElementById("outputFahrenheit").value = (
          (temp * 9) / 5 +
          32
        ).toFixed(2);
        document.getElementById("outputReamur").value = (
          (temp * 4) /
          5
        ).toFixed(2);
        document.getElementById("outputRankine").value = (
          ((temp + 273.15) * 9) /
          5
        ).toFixed(2);
        document.getElementById("outputKelvin").value = (temp + 273.15).toFixed(
          2
        );
        break;
      case "F":
        document.getElementById("outputFahrenheit").value = temp.toFixed(2);
        document.getElementById("outputCelcius").value = (
          ((temp - 32) * 5) /
          9
        ).toFixed(2);
        document.getElementById("outputReamur").value = (
          ((temp - 32) * 4) /
          9
        ).toFixed(2);
        document.getElementById("outputRankine").value = (
          temp + 459.67
        ).toFixed(2);
        document.getElementById("outputKelvin").value = (
          ((temp - 32) * 5) / 9 +
          273.15
        ).toFixed(2);
        break;
      case "R":
        document.getElementById("outputReamur").value = temp.toFixed(2);
        document.getElementById("outputCelcius").value = (
          (temp * 5) /
          4
        ).toFixed(2);
        document.getElementById("outputFahrenheit").value = (
          (temp * 9) / 4 +
          32
        ).toFixed(2);
        document.getElementById("outputRankine").value = (
          (temp * 9) / 4 +
          491.67
        ).toFixed(2);
        document.getElementById("outputKelvin").value = (
          (temp * 5) / 4 +
          273.15
        ).toFixed(2);
        break;
      case "Ra":
        document.getElementById("outputRankine").value = temp.toFixed(2);
        document.getElementById("outputCelcius").value = (
          ((temp - 491.67) * 5) /
          9
        ).toFixed(2);
        document.getElementById("outputFahrenheit").value = (
          temp - 459.67
        ).toFixed(2);
        document.getElementById("outputReamur").value = (
          ((temp - 491.67) * 4) /
          9
        ).toFixed(2);
        document.getElementById("outputKelvin").value = (
          ((temp - 491.67) * 5) / 9 +
          273.15
        ).toFixed(2);
        break;
      case "K":
        document.getElementById("outputKelvin").value = temp.toFixed(2);
        document.getElementById("outputCelcius").value = (
          temp - 273.15
        ).toFixed(2);
        document.getElementById("outputFahrenheit").value = (
          ((temp - 273.15) * 9) / 5 +
          32
        ).toFixed(2);
        document.getElementById("outputReamur").value = (
          ((temp - 273.15) * 4) /
          5
        ).toFixed(2);
        document.getElementById("outputRankine").value = (
          (temp * 9) /
          5
        ).toFixed(2);
        break;
    }
  }
}

function resetForm() {
  document.getElementById("Celcius").value = "";

  document.getElementById("outputCelcius").value = "";
  document.getElementById("outputFahrenheit").value = "";
  document.getElementById("outputReamur").value = "";
  document.getElementById("outputRankine").value = "";
  document.getElementById("outputKelvin").value = "";

  const radioButtons = document.getElementsByName("suhu");
  for (const radioButton of radioButtons) {
    radioButton.checked = false;
  }
}
{
  /* // <!-- referensi: https://www.climate4life.info/2018/06/konversi-online-satuan-suhu-celcius-kelvin-fahrenheit-reamul-rankine.html --> */
}
