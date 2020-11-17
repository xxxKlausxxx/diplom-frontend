const cardDelete = document.querySelector('.card__delete');
const cardAuthTitleDelete = document.querySelector('.card__auth-title_delete');

cardDelete.addEventListener('mouseover', () => {
  cardAuthTitleDelete.classList.add('card__auth-title_active');
});
cardDelete.addEventListener('mouseout', () => {
  cardAuthTitleDelete.classList.remove('card__auth-title_active');
});
