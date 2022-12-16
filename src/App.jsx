import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import beers from "./data/beer";
import { useState } from "react";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    const filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchResults(filteredBeers);
    setShowCard(true);
  };

  const showCardDetails = searchResults.map((beer) => {
    return ( 
      <div className="card" key={beer.id}>
        <div className="card-image">
          <img src={beer.image_url} alt={beer.name} />
          <div className="card-content">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.abv}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="landing-page">
        <NavBar 
          searchResults={searchResults} 
          handleChange={handleChange}
        />
        <Hero 
          showCardDetails={showCardDetails} 
          showCard={showCard} 
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;