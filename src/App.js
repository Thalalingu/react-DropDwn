import React from 'react';
import Form from './Form';

function App() {
  const handleFormSubmit = (data) => {
    console.log(data);
    // do something with the data
  };

  return (
    <div>
      <h1>My App</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
