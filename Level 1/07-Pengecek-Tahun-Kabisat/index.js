document.getElementById("checkButton").addEventListener("click", function () {
  const yearInput = document.getElementById("yearInput").value;
  const resultElement = document.getElementById("result");

  const year = parseInt(yearInput);

  if (isNaN(year)) {
    resultElement.textContent = "Harap masukkan tahun yang valid.";
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    resultElement.textContent = year + " adalah tahun kabisat.";
  } else {
    resultElement.textContent = year + " bukan tahun kabisat.";
  }
});
