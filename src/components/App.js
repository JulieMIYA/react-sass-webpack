import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../style/App.scss';

class App extends Component {
  render() {
    return <div>
      <h1>Hello World! it is you </h1>
      <p>This project was built to accompany an article on Codementor.</p>
      <p>
        Click <a href="https://goo.gl/d85bDh">here</a> to learn how to set up
        Webpack + React + Babel + Sass
      </p>
    </div>
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
