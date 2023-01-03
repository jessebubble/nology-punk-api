
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
                <label>More abv please </label>
                <br />

                <input type="checkbox" />
                <label>Drink + Food combo</label>
                <br />

                <input type="checkbox" />
                <label>Made with citrus</label>
                <br />

                <input type="checkbox" />
                <label>Barrel aged</label>
                <br />
                
                <input type="checkbox" />
                <label>Belgian</label>
                <br />

                <input type="checkbox" />
                <label>Stout</label>
                <br />

                <input type="checkbox" />
                <label>Lager</label>
                <br />

                <input type="checkbox" />
                <label>Low calorie</label>
                <br />

                <input type="checkbox" />
                <label>non-alcholic</label>
                <br />

                <input type="checkbox" />
                <label>Blonde</label>
                <br />

            </form>
        </div>
    );
};

export default FilterList;