const abrirModal = document.getElementById('abrirModal');
const cerrarModal = document.getElementById('cerrarModal');
const miModal = document.getElementById('miModal');

abrirModal.addEventListener('click', () => {
  miModal.showModal();
});

cerrarModal.addEventListener('click', () => {
  miModal.close();
});
