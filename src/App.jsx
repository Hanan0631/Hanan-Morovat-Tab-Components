import TapButtons from "./TabButtons";
import { animals } from "./constants";

function App() {
  return (
    <div className="container">
      <h1>Choose your favorite animal</h1>
      <TapButtons animals={animals} />
    </div>
  );
}

export default App;
