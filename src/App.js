import { useSelector } from 'react-redux'
/* import { increment, decrement } from './toolkit/toolkitReducer'; */
import { increment, decrement } from './toolkit/toolkitSlice';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.toolkitSlice.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button className = 'btn' onClick={()=>dispatch(increment())}>increment</button>
      <button className = 'btn' onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
