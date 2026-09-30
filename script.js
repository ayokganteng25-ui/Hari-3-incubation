// Console log belajar 
console.log("hello world");

/* Mengenal variabel let */
let ayy = "nama saya ayy";
console.log(ayy);

ayy = "salam kenal saya ayy";
console.log(ayy);

// Mengenal variabel const & let
let namaAplikasi = "form pendaftaraan ";
console.log(namaAplikasi);

namaAplikasi = " aplikasi belajar html";
console.log(namaAplikasi);

const budi = "nama saya budi";
console.log(budi);

// Fungsi sapa
function sapa(nama) { 
  return `Halo, ${nama}`; 
}

// Memanggil fungsi sapa
const pesanMaul = sapa("maul"); 
const pesanFatur = sapa("Fatur");

console.log(pesanMaul);
console.log(pesanFatur);

// ==========================================
// 1. MEMILIH ELEMEN HTML (DOM)
// ==========================================
const formSapa = document.querySelector('#formSapa');
const inputNama = document.querySelector('#inputNama');
const previewTeks = document.querySelector('#previewTeks');
const kotakPesan = document.querySelector('#kotakPesan');

// ==========================================
// 2. FUNCTION KUSTOM (REUSABLE BLOCK)
// ==========================================
// Function untuk membuat format pesan sapaan
function buatPesanSapaan(nama) {
  return `Halo, ${nama}! Selamat belajar JavaScript dasar. 🚀`;
}

// Function bantuan untuk menampilkan notifikasi pada layar
function tampilkanPesan(teks, isError = false) {
  kotakPesan.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');

  if (isError) {
    kotakPesan.classList.add('bg-red-100', 'text-red-700');
  } else {
    kotakPesan.classList.add('bg-green-100', 'text-green-700');
  }

  kotakPesan.textContent = teks;
}

// ==========================================
// 3. EVENT INPUT (LIVE PREVIEW)
// ==========================================
// Merespons setiap kali pengguna mengetik karakter di input field
inputNama.addEventListener('input', () => {
  const nilaiInput = inputNama.value;

  if (nilaiInput.trim() === '') {
    previewTeks.textContent = 'Belum ada input...';
  } else {
    previewTeks.textContent = nilaiInput;
  }
});

// ==========================================
// 4. EVENT SUBMIT & VALIDASI FORM
// ==========================================
// Merespons saat tombol 'Kirim Sapaan' diklik/form dikirim
formSapa.addEventListener('submit', (event) => {
  // Mencegah browser reload otomatis saat submit
  event.preventDefault();

  // Mengambil nilai input dan menghapus spasi tak berguna di awal/akhir
  const namaBersih = inputNama.value.trim();

  // Validasi Form
  if (namaBersih === '') {
    tampilkanPesan('Nama wajib diisi terlebih dahulu!', true);
  } else {
    // Memanggil function sapaan yang telah dibuat
    const hasilSapaan = buatPesanSapaan(namaBersih);
    tampilkanPesan(hasilSapaan, false);
  }
});