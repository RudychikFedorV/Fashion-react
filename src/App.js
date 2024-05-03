import Arrivalsm from "./components/arrivals/Arrivalsm";
import Payday from "./components/payday/Payday";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Favourite from "./components/favourite/Favourite";
import Vouchers from "./components/vouchers/Vouchers";
import Shopping from "./components/shopping/Shopping";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivalsm />
      <Payday />
      <Favourite />
      <Vouchers />
      <Shopping />
      <Footer />
    </div>
  );
}

export default App;
