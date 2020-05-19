import React from 'react';

const Nutrition = props => (

      <div className="Nutrition">
          <h4>Search for Alternatice Recipes</h4>
          <form onSubmit={props.getFacts}>
              <input name="foodName">
              </input>
              <button>
                  Sumbit
              </button>
          </form>
          
        <div>
          {props.titles.map((test) => {
             return(
             <div>
               <a href={test.sourceUrl}>{test.title}</a>
             </div>
             );
          }
          )} 
        </div>
          

  </div>
  );

export default Nutrition;