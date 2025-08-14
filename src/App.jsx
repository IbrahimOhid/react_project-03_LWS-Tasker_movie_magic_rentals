import "./App.css";
import Header from "./Header";
import MovieList from "./movieCompo/MovieList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar/>
          <MovieList/>
        </div>
      </main>
    </>
  );
}

export default App;
