import Header from './components/header/Header.jsx';
import Banner from "./components/banner/Banner.jsx";
import Slogan from './components/slogan/Slogans.jsx';
import Footer from './components/footer/Footer.jsx';
import { Provider } from "react-redux";
import { store } from './redux.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Banner />
      <Slogan />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
