
import Navbar from "./components/Navbar/Navbar.jsx";
import{ Routes,Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Coin from "./pages/Coin/coin.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/coin/:coinId' element={<Coin />} />
        </Routes>
        <Footer />

    </div>
  )
}

export default App