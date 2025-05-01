import recipeModalInit from "./createModalRecipe.js";

export default function createRecipeList (arr, parentElement) {

    const recipesList = [];

    arr.forEach(item => {
        const recipe = document.createElement("div");
        recipe.classList.add("recipe");

        recipe.addEventListener("click", () => {
            
            const recipeModal = recipeModalInit(item);
            
            parentElement.append(recipeModal);
            document.body.classList.add("no-scroll");
        });

        recipe.textContent = item.title || "Невідоме ім'я";
        recipesList.push(recipe);
    });

    return recipesList;
}