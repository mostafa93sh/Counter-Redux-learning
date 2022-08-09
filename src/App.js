import "./App.css";
import { counterAction } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { isLogin, islogout } from "./store/authSlice";

function App() {
  const globalState = useSelector((state) => state);
  const { increases, decreases } = counterAction;

  const dispatch = useDispatch();

  const increaseCounter = () => {
    const action = { type: "increase", payload: 3 };
    dispatch(action);
  };
  const decreaseCounter = () => {
    const action = { type: "decrease", payload: 2 };
    dispatch(action);
  };

  const toggleHandle = () => {
    if (globalState.auth.isLogedIn) {
      console.log("nooooo");
      dispatch(islogout());
    } else {
      console.log("yes");
      dispatch(isLogin());
    }
  };
  return (
    <div className='App py-4'>
      <h1>hello Redux Basics</h1>
      {globalState.auth.isLogedIn && (
        <Fragment>
          <div className=''>
            <h3>Counter :{globalState.counter.value}</h3>
          </div>
        </Fragment>
      )}

      <div>
        <button
          className='btn btn-success mx-3'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Tooltip on top'
          onClick={() => dispatch(increases(7))}>
          increase
        </button>
        <button
          className='btn btn-success'
          onClick={() => dispatch(decreases(7))}>
          decrease
        </button>
      </div>
      <button className='btn btn-success my-3' onClick={toggleHandle}>
        {globalState.auth.isLogedIn ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
