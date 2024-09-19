import { BrowserRouter } from "react-router-dom";
import { AppRouting as RoutesComponent } from "./routes/AppRouting";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
      {/* <Button label="Submit" onClick={handleClick}></Button> */}
    </div>
  );
}

export default App;
