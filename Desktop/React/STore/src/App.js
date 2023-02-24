import './App.scss'
import Categories from './Components/Categories/Categories';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
