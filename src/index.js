import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component. This componenet should produce
// some HTML

const App = function(){
  return <div>Hi!</div>;
}

// Take this componenet's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>);

