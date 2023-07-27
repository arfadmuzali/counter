const angka = document.getElementById("angka");
let counter = 0;
function getTambah() {
  counter++;
  angka.textContent = counter;
}

function getKurang() {
  counter--;
  angka.textContent = counter;
}
