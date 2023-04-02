import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import Phonebar from "./Components/Phonebar/Phonebar";
import PriceList from "./Components/PriceList/PriceList";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">Hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Phonebar></Phonebar>
    </div>
  );
}

export default App;
