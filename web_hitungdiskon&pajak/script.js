const hargaInput = document.getElementById("hargaAwal");
const diskonInput = document.getElementById("diskon");
const pajakInput = document.getElementById("pajak");

const diskonOutput = document.getElementById("diskonValue");
const pajakOutput = document.getElementById("pajakValue");
const hargaAkhirOutput = document.getElementById("hargaAkhirValue");

function hitungHargaAkhir() {
  const harga = Number(hargaInput.value);
  const diskon = Number(diskonInput.value);
  const pajak = Number(pajakInput.value);

  const diskonValue = harga * (diskon / 100);
  const hargaSetelahDiskon = harga - diskonValue;
  const pajakValue = hargaSetelahDiskon * (pajak / 100);
  const total = hargaSetelahDiskon + pajakValue;

  diskonOutput.textContent = diskonValue;
  pajakOutput.textContent = pajakValue;
  hargaAkhirOutput.textContent = total;
}
