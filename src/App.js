import Arrivalsm from "./components/arrivals/Arrivalsm";
import Payday from "./components/payday/Payday";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivalsm />
      <Payday />
    </div>
  );
}

export default App;
