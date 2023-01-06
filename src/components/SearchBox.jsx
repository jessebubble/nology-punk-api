const SearchBox = (props) => {
    const { searchEvent } = props;

    return (
        <>
        <div className="searchbox">
            <form>
                <input type="text" placeholder="Find your beer" onChange={searchEvent} />
            </form>  
        </div>
        </>
    );
};

export default SearchBox;