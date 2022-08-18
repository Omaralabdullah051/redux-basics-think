import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  //   console.log(ownProps);
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: (value) => dispatch(increment(value)),
    decrementHandler: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
