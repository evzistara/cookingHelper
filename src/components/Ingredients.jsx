import { useState } from "react";
import Recipe from "./Recipe";


function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const [recipeData, setRecipeData] = useState("");

  const ingredientsList = ingredients.map((ing, index) => {
    return <li className="border bg-button text-white rounded-md w-fit py-1 px-2 my-2 mx-2 inline" key={index}>{ing}</li>}
  )

  function addIngredients(formData) {
    const ingr = formData.get("ingredient");
    if(ingr === "") return;
    setIngredients(prev => [...prev, ingr])
  }

  async function getAIRecipe(){
    setRecipe(prev => !prev);
    const response = await fetch("/.netlify/functions/getRecipe", {
        method: "POST",
        body: JSON.stringify({ ingredients }),
      });
      const data = await response.json();
      setRecipeData(data.recipe);

  }
  return (
    <>
      <div className="w-3xl mx-auto my-20">
        <h2 className="text-4xl text-center my-8">What do you have in your fridge? 🤔</h2>
        <form className="flex justify-between items-center" action={addIngredients}>
          <input
            className="w-full border border-gray-400 rounded-md p-2 mr-4 bg-white"
            type="text"
            placeholder="🥦🧅🍖"
            name="ingredient"
    
          />
          <button className="bg-background text-white rounded-md p-2 shrink-0">
            + Add ingredient
          </button>
        </form>
        <div className="border border border-white bg-white text-sm border-2 rounded-md my-4 py-2 px-4 w-fit mx-auto flex gap-5 items-center">
          <p className="bg-outline rounded-md p-2">❓</p>
          <div>
          <p>Add one ingredient at a time</p>
          <p>Minimum of 4 ingredients is required</p> </div>
        </div>

        {ingredients.length>0 && <div className="my-8">
          <h2 className="text-3xl">Ingredients on hand:</h2>
          <ul className="my-5">
            {ingredientsList}
          </ul>
          

          {ingredients.length > 3 &&<div className="my-5 p-5 rounded-md flex justify-between items-center bg-white">
            <div>
              <p className="text-md font-semi">Ready for a recipe?</p>
              <p className="text-sm text-gray-400">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="bg-orange-400 py-2 px-4 rounded-md text-white" onClick={getAIRecipe}>Get a recipe</button>
          </div>}
        </div>}
        
        {recipe && <Recipe recipeData={recipeData} />}
      </div>
    
    </>

  );
}

export default Ingredients;
