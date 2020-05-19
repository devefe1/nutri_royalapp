import React from 'react';

const Nutrition = props => (

      <div className="Nutrition">
          <h3>Search For Alternative Recipes Here! </h3>
          <form onSubmit={props.getFacts}>
              <input name="foodName">
              </input>
              <button>
                  Search
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