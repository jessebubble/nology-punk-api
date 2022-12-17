import SearchBox from "./SearchBox";

const NavBar = (props) => {

    const { searchResults, handleChange } = props;
      
    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>_nology</h1>
                    <p> powered by Punk API </p>
                </div>
            
                <div className="navbar-content">
                    <SearchBox 
                        searchResults={searchResults}
                        handleChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
};

export default NavBar;