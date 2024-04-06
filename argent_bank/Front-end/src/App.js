import Header from './components/header/Header.jsx';
import Banner from "./components/banner/Banner.jsx";
import './App.css';
import Slogan from './components/slogan/Slogans.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
