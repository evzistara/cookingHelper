import { useState } from "react";
import Recipe from "./Recipe";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(false);

  const ingredientsList = ingredients.map((ing, index) => {
    return <li className="list-disc" key={index}>{ing}</li>}
  )

  function addIngredients(formData) {
    const ingr = formData.get("ingredient");
    if(ingr === "") return;
    setIngredients(prev => [...prev, ingr])
  }

  function getRecipe(){
    setRecipe(prev => !prev)
  }

  return (
    <>
      <div className="w-3xl mx-auto m-10">
        <form className="flex justify-between items-center" action={addIngredients}>
          <input
            className="w-xl border border-gray-400 rounded-md p-2 mr-4"
            type="text"
            placeholder="e.g. oregano"
            name="ingredient"
    
          />
          <button className="bg-black text-white rounded-md p-2">
            + Add ingredient
          </button>
        </form>

        {ingredients.length>0 && <div className="my-10">
          <h2 className="text-4xl">Ingredients on hand:</h2>
          <ul className="mx-10 my-5">
            {ingredientsList}
          </ul>
          

          {ingredients.length > 4 &&<div className="my-5 p-5 rounded-md flex justify-between items-center bg-background">
            <div>
              <p className="text-md font-semi">Ready for a recipe?</p>
              <p className="text-sm text-gray-400">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="bg-orange-400 py-2 px-4 rounded-md text-white" onClick={getRecipe}>Get a recipe</button>
          </div>}
        </div>}
        
        {recipe && <Recipe />}
      </div>
    
    </>

  );
}

export default Ingredients;
