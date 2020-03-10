import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, signOut } from "./actions";
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? (
        <h3>
          You are logged in{" "}
          <span onClick={() => dispatch(signOut())} class="span">
            {" "}
            Log Out
          </span>
        </h3>
      ) : (
        <h4>
          You are not logged in please{" "}
          <span onClick={() => dispatch(signIn())} class="span">
            Log In
          </span>
        </h4>
      )}
    </div>
  );
}

export default App;
