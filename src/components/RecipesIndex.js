import React from 'react';
import { Link } from 'react-router-dom';

const RecipeIndex = (props)=>{
    return( 
        <div>
            <h2>Recipe index</h2>
            <Link to="/recipes/1">Test </Link>
        </div>
        
        
    );
};
export default RecipeIndex;