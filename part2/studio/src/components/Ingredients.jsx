import recipedata from './recipe.json'

function IngredientList() {
  let Ingredients = recipedata[0].ingredients.map((ingredients, index) => {
    return <li key={index}>{ingredients}</li>
  });
     return (
  <div>
    <h3>Ingredients</h3>
    <ul>
    {Ingredients}
    </ul>
  </div>
     );
   }

export default IngredientList
 
//import json file for the data
//use a nested map to get inside the inner array
 