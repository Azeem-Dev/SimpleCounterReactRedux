import './App.css';
import {increment,decrement,Login} from './actions';
import {useSelector,useDispatch} from 'react-redux';
function App() {
  
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  const islogged= useSelector(state=>state.logged)




  const incrementFunction=()=>{
    dispatch(increment());
  }

  const decrementFunction=()=>{
    dispatch(decrement());
  }
  const signInFunction=()=>{
    dispatch(Login());
  }


  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={incrementFunction}>+</button>
        <button onClick={decrementFunction}>-</button>
        <button onClick={signInFunction}>SignIn</button>
      {islogged?
        <h3>Valueable information i shouldn't see{islogged}</h3>
        :<h3>You aren't allowed</h3>}
    </div>
  );



}

export default App;
