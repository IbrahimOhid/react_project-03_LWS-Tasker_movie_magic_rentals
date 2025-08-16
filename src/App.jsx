import { useState } from "react";
import "./App.css";
import { MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./movies/MovieList";
import Sidebar from "./Sidebar";

function App() {
  const [cartMovie, setCartMovie] = useState([])
  return (
    <>
      <MovieContext.Provider value={[cartMovie, setCartMovie]}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
