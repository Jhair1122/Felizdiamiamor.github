function crearCorazon() {
  const contenedor = document.getElementById('corazones-inicio');
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.textContent = '💖';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.fontSize = Math.random() * 10 + 15 + 'px';
  contenedor.appendChild(corazon);
  setTimeout(() => contenedor.removeChild(corazon), 6000);
}

setInterval(crearCorazon, 300);

let cartaAbierta = false;

function abrirCarta() {
  if (cartaAbierta) return;

  const carta = document.getElementById('carta');
  const contenido = document.getElementById('contenido-carta');
  const musica = document.getElementById('musica');

  carta.classList.add('abierta');
  musica.play();
  cartaAbierta = true;

  // Más corazones después de abrir
  setInterval(() => {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '💗';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = Math.random() * 10 + 20 + 'px';
    document.getElementById('corazones-inicio').appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
  }, 250);
}
