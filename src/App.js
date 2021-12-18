import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <p>
          <button onClick={() => dispatch({type:'INCREMENT'})}>INCREMENT</button>
        </p>
        <p>
          <button onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
        </p>
      </header>
    </div>
  );
}

export default App;
