export const refs = {
  body: document.querySelector('body'),
  // All Categories
  allCategoriesBtn: document.querySelector('.all-categories-btn'),
  allCategoriesList: document.querySelector('.all-categories-list'),
  // Recipes
  recipesSection: document.querySelector('.recipes'),
  recipesList: document.querySelector('.recipe-list'),
  recipesGuard: document.querySelector('.recipes-guard'),

  //favorites page
  filterFavorites: document.querySelector('.favorites-cards-filter'),
  recipesContainerFavorites: document.querySelector(
    '.favorites-cards-container'
  ),
  emptyContainerFavorites: document.querySelector('.favorites-empty-container'),
  heroContainerFavorites: document.querySelector('.favorites-hero'),

  // Modal recipe
  modalRecipe: document.querySelector('.js-modal-recipe'),
  modalRecipeOpen: document.querySelector('.recipe-card-btn'),
  modalRecipeClose: document.querySelector('.js-modal-recipe-close'),
};
