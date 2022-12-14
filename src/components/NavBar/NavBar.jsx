import FilterItem from "./FilterItem";
import FilterList from "./FilterList";
import SearchBox from "./SearchBox";

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <h3>placeholder</h3>
                </div>
            
                <div className="navbar-content">
                    <SearchBox />
                    <FilterItem />
                    <FilterList />
                </div>
            </div>
        </>
    );
};

export default NavBar;