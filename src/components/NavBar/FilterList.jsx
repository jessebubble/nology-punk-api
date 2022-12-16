
const FilterList = (props) => {

    if (!props.showList) {
        return props.showList
    };

    return (
        <div className="filterlist">
            <form>
                <input type="checkbox" />
                <label>The Classics</label>
                <br />

                <input type="checkbox" />
                <label>Citrus Love </label>
                <br />

                <input type="checkbox" />
                <label>More abv please</label>
            </form>
            
            <div className="filtered-results" >     
                <p>
                    filtered results here
                </p>
            </div>
        </div>
    );
};

export default FilterList;