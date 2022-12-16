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
      <>
      <div className="card">
      <div className="card-content" key={beer.id}>
          <div className="card-image">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="card-text">
            <h1>
              {beer.name} <span> {beer.abv} abv</span>
            </h1>
            <h3>{beer.tagline}</h3>
            <p>
              {beer.description}
              <br />
              <span>Brewed since {beer.first_brewed}</span>
            </p>
          </div>
      </div>
      </div>
      </>
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