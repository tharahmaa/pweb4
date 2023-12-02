
export async function fetchRecipeDetails(recipeId) {
    const response = await fetch(`http://localhost:3001/recipes/${recipeId}`);
    const data = await response.json();
    return data;
  }
  