const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    // Adiciona o 0 antes dos valores se for necessário
    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
  
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}, 1000); // Define o intervalo para 1000 milissegundos (1 segundo)
