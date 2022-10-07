import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import MainPage from './ui/pages/MainPage/Main';
import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import PokemonPage from './ui/pages/PokemonPage/PokemonPage';

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemonPage:id" element={<PokemonPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
