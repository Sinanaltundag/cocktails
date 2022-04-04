import "./App.css";
// import { useGlobalContext } from './components/Context';
import Main from "./components/Main/Main";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SingleCocktail from "./components/Cocktail/SingleCocktail";
import About from "./components/About/About";

function App() {
  // const {hello} = useGlobalContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
<Route path="/" element={<Main />}/>
<Route path="/cocktail/:id" element={<SingleCocktail />}/>
<Route path="/about" element={<About/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
