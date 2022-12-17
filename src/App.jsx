import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { useState } from "react";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (event) => {
    const searchValue = event.target.value;
    fetch (`https://api.punkapi.com/v2/beers`)
    .then((res) => {
      return res.json();
    })
    .then((returnedData) => {
      const filterData = returnedData.filter((beer) => {
        return beer.name.toLowerCase().includes(searchValue.toLowerCase());
      });
        setSearchResults(filterData);
        setShowCard(true);
    });
  };

  const getCardList = () => {
    fetch (`https://api.punkapi.com/v2/beers`)
    .then((data) => {           
        return data.json();
    })
    .then((returnedBeerData) => {
        return returnedBeerData.map((beerContent) => {
            const { id, name, image_url, tagline, description, abv, first_brewed } = beerContent;
            return (    
                <div className="card">
                    <div className="card-content" key={id}>
                        <div className="card-image">
                            <img src={image_url} alt={name} />
                        </div>
                        <div className="card-text">
                            <h1>
                                {name} <span> {abv} abv</span>
                            </h1>
                            <h3>{tagline}</h3>
                            <p>
                                {description}
                                <br />
                                <span>Brewed since {first_brewed}</span>
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    });
};

  return (
    <>
      <div className="landing-page">
        <NavBar 
          searchResults={searchResults} 
          handleChange={handleChange}
        />
        <Hero 
          showCard={showCard} 
          setShowCard={setShowCard}
          handleChange={handleChange}
          getCardList={getCardList()}
        />
      </div>
    </>
  );
}

export default App;