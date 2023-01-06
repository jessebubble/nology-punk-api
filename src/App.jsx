import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([]);

  return (
    <>
      <div className="landing-page">
        <NavBar 
          setSearchResults={setSearchResults}
          setFilterResults={setFilterResults}
        />
        <Hero
          searchResults={searchResults} 
          filterResults={filterResults}
        />
      </div>
    </>
  );
}

export default App;