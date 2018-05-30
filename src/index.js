import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../style/App.scss';
import reducers from './reducers';
import RecipesDetail from './components/RecipesDetail';
import RecipesIndex from './components/RecipesIndex';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path = "/recipes/:id" component= { RecipesDetail } />                                      
          <Route path = "/"  component= { RecipesIndex } />
        </Switch>
        </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
