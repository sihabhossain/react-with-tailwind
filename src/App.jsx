import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">Hello from tailwind</h1>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
