import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { useState } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <div className="landing-page">
        <NavBar 
          setSearchResults={setSearchResults}
        />
        <Hero
          searchResults={searchResults} 
        />
      </div>
    </>
  );
}

export default App;