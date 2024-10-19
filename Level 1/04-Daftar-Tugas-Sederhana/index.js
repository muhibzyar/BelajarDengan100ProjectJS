document.getElementById("tambahTugas").addEventListener("click", function () {
  const tugasInput = document.getElementById("tugasInput");
  const tugasText = tugasInput.value.trim();

  if (tugasText === "") {
    alert("Tolong isi tugasnya...");
    return;
  }
  const daftarTugas = document.getElementById("daftarTugasku");

  const li = document.createElement("li");
  li.textContent = tugasText;

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.addEventListener("click", function () {
    daftarTugas.removeChild(li);
  });

  li.appendChild(tombolHapus);
  daftarTugas.appendChild(li);
  tugasInput.value = "";
});
