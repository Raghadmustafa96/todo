import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js';
import LoginProvider from './components/auth/context.js';

class Main extends React.Component {

  render() {
    return (
      <LoginProvider>
      <App />
    </LoginProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
