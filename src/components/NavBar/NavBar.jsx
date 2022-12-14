import FilterItem from "./FilterItem";
import FilterList from "./FilterList";
import SearchBox from "./SearchBox";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>nav sidebar</h1>
            <SearchBox />
            <FilterItem />
            <FilterList />

        </div>
    );
};

export default NavBar;