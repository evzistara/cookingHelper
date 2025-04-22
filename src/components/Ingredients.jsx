import {useState} from "react";

function Ingredients() {
const [ingredients, setIngredients] = useState([])

    function addIngredients() {

    }
  return (
    <>
    <div className="w-3xl mx-auto m-10">
      <div>
        <input
          className="w-xl border border-gray-400 rounded-md p-2 mr-4"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="bg-black text-white rounded-md p-2" onClick={addIngredients}>
          + Add ingredient
        </button>
      </div>

      <div className="my-10">
        <h2 className="text-4xl">Ingredients on hand:</h2>
        <div className="my-5 flex justify-between items-center">
            <div>
            <p>Ready for a recipe?</p>
                <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <buton>Get a recipe</buton>
            
        </div>
      </div></div>
    </>
  );
}

export default Ingredients;
