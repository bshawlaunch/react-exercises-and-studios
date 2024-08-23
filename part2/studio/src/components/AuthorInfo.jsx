import recipedata from './recipe.json'
import './styling.css'


function AuthorInfo() {
  const authorName = recipedata[0].author;
  const authorImage = recipedata[0].authorImage; 
  const website = recipedata[0].website;
  return (
    <>
      <div>{authorName}</div>
      <img className="authorImage" src={authorImage} alt={authorName} />
      <a href={website}>Link to Recipe</a>
    </>
   )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 