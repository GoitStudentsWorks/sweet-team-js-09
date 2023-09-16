import { refs } from '../refs/refs.js';
import { getAllRecipes } from '../api/api-service.js';
import { modalRecipeCard } from '../utils/markup/modal-recipe-card.js';

// Функция открытия или закрытия окна с рецептом
export function modalRecipeOpen(cardId) {
  refs.modalRecipe.classList.toggle('is-hidden');

  // refs.modalRecipeOpen.removeEventListener('click', modalRecipeOpen);
  // refs.modalRecipeClose.addEventListener('click', modalRecipeClose);

  // function modalRecipeClose() {
  //   refs.modalRecipe.classList.toggle('is-hidden');
  // }

  getAllRecipes(cardId).then(data => {
    const { title, youtube, tags, rating, ingredients, instructions } =
      data.results[1];

    return (refs.modalRecipe.innerHTML = modalRecipeCard(
      title,
      youtube,
      tags,
      rating,
      ingredients,
      instructions
    ));
  });
}
