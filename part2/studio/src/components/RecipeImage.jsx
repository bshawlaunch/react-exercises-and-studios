import recipedata from './recipe.json'
import "./styling.css";

function RecipeImage() {
   return (
    
    <img className="recipeImage" src={recipedata[0].recipeImage} />

   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 