import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import beers from "./data/beer";
import { useState } from "react";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    const filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchResults(filteredBeers);
    setShowResults(true);
  };

  const beerDetails = beers.map((beer) => {
    return {
      description: beer.description,
      image_url: beer.image_url,
      name: beer.name,
      first_brewed: beer.first_brewed,
      abv: beer.abv,
    };
  });

  return (
    <>
      <div className="landing-page">
        <NavBar 
          searchResults={searchResults} 
          handleChange={handleChange}
        />
        <Hero 
          searchResults={searchResults} 
          showResults={showResults} 
          setShowResults={setShowResults} 
          handleChange={handleChange} 
          beerDetails={beerDetails}
        />
      </div>
    </>
  );
}

export default App;