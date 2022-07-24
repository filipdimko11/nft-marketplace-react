import ChooseUs from "./components/ChooseUs";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <div className="App">
        <Home/>
        <Clients/>
        <CreateAndSell/>
        <ChooseUs/>
        <Marketplace/>
    </div>
  );
}

export default App;
