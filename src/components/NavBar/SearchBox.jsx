import FilterItem from "./FilterItem";

const SearchBox = (props) => {
    const { searchResults, handleChange, handleClick } = props;
    
    return (
        <div className="searchbox">
            <form>
                <input type="text" placeholder="Find your beer" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>
                    Search
                </button>
            </form>  

            <FilterItem />

            <div className="searchbox-results">
                {searchResults.map((beer) => {
                    return <p>{beer.name}</p>;
                })}
            </div>            
        </div>
    );
};

export default SearchBox;