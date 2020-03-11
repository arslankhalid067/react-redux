import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, signOut, reset } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {isLogged ? (
        <div>
          <h2>Counter {counter}</h2>
          <button
            className="btn btn-primary btn-sm m-2 pr-3 pl-3"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="btn btn-primary btn-sm m-2 pr-3 pl-3"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <h3>
            You are logged in{" "}
            <span onClick={() => dispatch(signOut())} class="span">
              Log Out
            </span>
          </h3>
        </div>
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
