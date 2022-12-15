import { useState } from 'react';
import FilterList from './FilterList';

const FilterItem = (props) => {

    const [showList, setShowList] = useState(false);

    const handleClick = () => {
        setShowList(!showList);
    };

    return (
        <>
        <div className="filterbox">
            <form>
                <input 
                    type="checkbox" 
                    onClick={handleClick}
                />
                <label>Filter beer search</label>
            </form>
        </div>
        <FilterList show={showList} />
        </>
    );
};

export default FilterItem;