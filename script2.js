const tombol = document.querySelector('#tombol'); 
const hasil = document.querySelector('#hasil'); 

tombol.addEventListener('click', () => {   
    hasil.textContent = 'Tombol sudah diklik'; 
});  

const nama = document.querySelector('#nama'); 
const preview = document.querySelector('#preview'); 

nama.addEventListener('input', () => {   
    preview.textContent = nama.value; 
});      