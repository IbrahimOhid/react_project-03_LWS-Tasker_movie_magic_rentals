import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Footer from "./Footer"
import MovieList from "./movies/MovieList";
import Sidebar from "./Sidebar";
import Header from "./Header";

function App() {
  const [cartMovie, setCartMovie] = useState([]);
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={`w-full h-full ${darkMode ? ".dark" : ""}`}>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={[cartMovie, setCartMovie]}>
           <Header/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
