import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from './welcome'; // Adjust the path as necessary

const App = () => (
  <div>
    <h1>Welcome to the Email Form</h1>
    <EmailForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));