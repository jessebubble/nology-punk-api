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
        />
      </div>
    </>
  );
}

export default App;