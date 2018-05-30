import { combineReducers } from 'redux';

const recipesReducer = (state = {}, action)=>{
    switch(action.type){
        default: return state;
    }    
};

const rootReducer = combineReducers({
    recipes : recipesReducer
})
export default rootReducer;