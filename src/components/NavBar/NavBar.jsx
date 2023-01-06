import SearchBox from "../SearchBox";
import FilterItem from "../NavBar/FilterItem";
import FilterList from "../NavBar/FilterList";

const NavBar = (props) => {

    const { setSearchResults } = props;

    const searchEvent = (event) => {
        const userSearch = event.target.value;
        fetch (`https://api.punkapi.com/v2/beers`)
        .then((res) => {
          return res.json();
        })
        .then((returnedData) => {
          const filterData = returnedData.filter((beer) => {
            return beer.name.toLowerCase().includes(userSearch.toLowerCase());
          });
            setSearchResults(filterData);
        });
      };        
      
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="/">
                      <h1>_nology</h1>
                      <p> powered by Punk API </p>
                    </a>
                </div>
                <div className="navbar-content">
                    <SearchBox searchEvent={searchEvent}/>
                    <FilterItem />
                    <FilterList />
                </div>
            </div>
        </>
    );
};

export default NavBar;