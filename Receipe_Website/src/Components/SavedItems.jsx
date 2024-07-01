import React, { useContext } from 'react';
import Nav from './Nav';
import userContext from './UserContext';

function SavedItems() {
  const { savedreceipe } = useContext(userContext);

  console.log('Saved Recipes:', savedreceipe); // Debugging line

  return (
    <>
      <Nav />
      {Array.isArray(savedreceipe) && savedreceipe.length > 0 ? (
        savedreceipe.map((ele, index) => (
          <div className="eachItem" key={index}>
            <div className="left">
              <img src={ele.strMealThumb} alt={ele.strMeal} />
            </div>
            <div className="right">
              <h3 id="head">{ele.strMeal}</h3>
              <hr id="sitem" />
              <h3>CATEGORY : {ele.strIngredient1}</h3>
              <h3>Source : {ele.strSource}</h3>
              <br />
              <div className="info">
                <h2>Ingredients</h2>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No saved recipes</p>
      )}
    </>
  );
}

export default SavedItems;
