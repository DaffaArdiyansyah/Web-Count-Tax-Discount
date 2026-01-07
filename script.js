const hargaInput = document.getElementById("hargaAwal");
const diskonInput = document.getElementById("diskon");
const pajakInput = document.getElementById("pajak");

const diskonOutput = document.getElementById("diskonValue");
const pajakOutput = document.getElementById("pajakValue");
const hargaAkhirOutput = document.getElementById("hargaAkhirValue");

hargaInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  e.target.value = value ? Number(value).toLocaleString("id-ID") : "";
});

function getHargaAsli() {
  return Number(hargaInput.value.replace(/\D/g, ""));
}

function validasiInput(harga, diskon, pajak) {
  if (isNaN(harga) || harga <= 0) {
    alert("Harga harus diisi dan lebih dari 0");
    return false;
  }
  if (isNaN(diskon) || diskon < 0 || diskon > 100) {
    alert("Diskon harus diisi antara 0-100%");
    return false;
  }
  if (isNaN(pajak) || pajak < 0) {
    alert("Pajak harus diisi dan tidak boleh negatif");
    return false;
  }
  return true;
}

function formatRupiah(angka) {
  if (!angka) return "0";
  return angka.toLocaleString("id-ID");
}

function hitungHargaAkhir() {
  const harga = getHargaAsli();
  const diskon = Number(diskonInput.value);
  const pajak = Number(pajakInput.value);

  if (!validasiInput(harga, diskon, pajak)) return;

  const diskonValue = harga * (diskon / 100);
  const hargaSetelahDiskon = harga - diskonValue;
  const pajakValue = hargaSetelahDiskon * (pajak / 100);
  const total = hargaSetelahDiskon + pajakValue;

  diskonOutput.textContent = formatRupiah(diskonValue);
  pajakOutput.textContent = formatRupiah(pajakValue);
  hargaAkhirOutput.textContent = formatRupiah(total);
}
