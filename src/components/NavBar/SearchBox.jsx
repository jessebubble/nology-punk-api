import { useState } from "react";
import beers from "../../data/beer";
import FilterItem from "./FilterItem";
import ButtonJSX from "../Button";


const SearchBox = (props) => {

    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        const searchValue = event.target.value;
        const filteredBeers = beers.filter((beer) => {
            return beer.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        setSearchResults(filteredBeers);
    };

    return (
        <div className="searchbox">
            <form>
                <input 
                    type="text" 
                    placeholder="Find your beer" 
                    onChange={handleChange}
                />
                <ButtonJSX />
            </form>  

            <FilterItem />

            <div className="searchbox-results" >     
                {searchResults.map((beer) => {
                    return <p>{beer.name}</p>;
                })}
            </div>
        </div>
    );
};

export default SearchBox;