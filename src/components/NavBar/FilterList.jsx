
const FilterList = (props) => {

    if (!props.showList) {
        return props.showList
    };

    return (
        <div className="filterlist">
            <form>
                <input type="checkbox" />
                <label>New Releases</label>
                <br />

                <input type="checkbox" />
                <label>More abv please </label>
                <br />

                <input type="checkbox" />
                <label>Non-Alcoholic</label>
                <br />

                <input type="checkbox" />
                <label>Hazy</label>
                <br />

                <input type="checkbox" />
                <label>Barrel aged</label>
                <br />
                
                <input type="checkbox" />
                <label>Sours</label>
                <br />

                <input type="checkbox" />
                <label>Stout</label>
                <br />

                <input type="checkbox" />
                <label>Lager</label>
                <br />

                <input type="checkbox" />
                <label>Belgium</label>
                <br />

                <input type="checkbox" />
                <label>Seltzer</label>
                <br />

                <input type="checkbox" />
                <label>Blonde</label>
                <br />
                <input type="checkbox" />
                <label>The Classics</label>
                <br />

            </form>
        </div>
    );
};

export default FilterList;