let angkaPertama = '';
let oprator = '';
let angkaKedua = '';

function nilai(number) {
  const angkaMasuk = document.getElementById('angka-masuk');
  angkaMasuk.value += number;
}

function minus() {
  const angkaMasuk = document.getElementById('angka-masuk');

  if (angkaMasuk.value[0] !== '-' && angkaMasuk.value !== '') {
    angkaMasuk.value = '-' + angkaMasuk.value;
  }
}

function titik() {
  const angkaMasuk = document.getElementById('angka-masuk');

  if (angkaMasuk.value !== '' && !angkaMasuk.value.includes('.')) {
    angkaMasuk.value += '.';
  }
}

function hapus() {
  const angkaMasuk = document.getElementById('angka-masuk')
  angkaMasuk.value = angkaMasuk.value.slice(0, -1)
}

function jumlah(op) {
  const angkaMasuk = document.getElementById('angka-masuk');

  if (angkaMasuk.value !== '') {
    angkaPertama = angkaMasuk.value;
    oprator = op;
    angkaMasuk.value = '';
  }
}

function hasil() {
  const angkaMasuk = document.getElementById('angka-masuk');
  angkaKedua = angkaMasuk.value;

  let hasil = 0;

  if (oprator === '+') {
    hasil = parseFloat(angkaPertama) + parseFloat(angkaKedua);
  } else if (oprator === '-') {
    hasil = parseFloat(angkaPertama) - parseFloat(angkaKedua);

  } else if (oprator === '*') {
    hasil = parseFloat(angkaPertama) * parseFloat(angkaKedua);
  } else if (oprator === '/') {
    hasil = parseFloat(angkaPertama) / parseFloat(angkaKedua)
  } else if (oprator === '%') {
    hasil = parseFloat(angkaPertama) % parseFloat(angkaKedua)
  }

  angkaMasuk.value = hasil;

  angkaPertama = '';
  angkaKedua = '';
  oprator = ''

}

// Kekurangan

// 1. Tidak bisa menghitung lebih dari 2 angka, hanya bisa menghitung 2 angka saja

// 2. Tidak bisa menghitung angka yang lebih dari 10 digit, hanya bisa menghitung angka yang lebih kecil dari 10 digit saja