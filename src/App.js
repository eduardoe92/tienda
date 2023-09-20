import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import Index from './components/Index';
import NewCollection from './components/NewCollection';
import DiscoveryCollection from './components/DiscoveryCollection';
import PopularProducts from './components/PopularProducts';
import MostRated from './components/MostRated';
import NewShoes from './components/NewShoes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <NewCollection/>
        <DiscoveryCollection/>
        <PopularProducts/>
        <MostRated/>
        <NewShoes/>
        <Routes>
          <Route exact path={"/"} element={<Index />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

