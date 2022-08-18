import { Provider } from "react-redux";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import HookCounter from "./components/HookCounter";
import VariableCounter from "./components/VariableCounter";
// import Counter from "./components/Counter";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5"></div>
        {/* <Counter /> */}
        <HookCounter />
        <DynamicHooksCounter />
        <VariableCounter />
        <VariableCounter dynamic />
      </div>
    </Provider>
  );
}

export default App;
