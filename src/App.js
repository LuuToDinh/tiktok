import { useState } from "react";

function App() {
  const info = {
    name: 'app',
    time: '27/01',
    id: 123,
  }
  const [state, setState] = useState(info);

  function handleClick() {
    setState({
      ...state,
      power: '100%'
    });
  }

  return (
    <div className="App">
        <h1>{JSON.stringify(state)}</h1>
        <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;
