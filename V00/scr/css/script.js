// Selecionando elementos
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close');

// Abrir o modal
openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fechar o modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar clicando fora do modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
