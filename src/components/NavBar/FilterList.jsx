/* import { useState } from 'react'; */
const FilterList = (props) => {
   /*  const [newReleases, setNewReleases] = useState(false);
    const [moreAbv, setMoreAbv] = useState(false);
    const [nonAlcoholic, setNonAlcoholic] = useState(false);
    const [seltzer, setSeltzer] = useState(false);
    const [hazy, setHazy] = useState(false);
    const [sours, setSours] = useState(false);
    const [barrelAged, setBarrelAged] = useState(false);
    const [stout, setStout] = useState(false);
    const [lager, setLager] = useState(false);
    const [belgium, setBelgium] = useState(false);
    const [blonde, setBlonde] = useState(false);
    const [theClassics, setTheClassics] = useState(false); */

    if (!props.showList) {
        return props.showList
    };

/*     const { filterEvent } = props; */

    return (
        <div className="filterlist">
            <form>
                <input type="checkbox"  />
                <label>New Releases</label>
                <br />

                <input type="checkbox" />
                <label>More abv please </label>
                <br />

                <input type="checkbox" />
                <label>Non-Alcoholic</label>
                <br />

                <input type="checkbox" />
                <label>Seltzer</label>
                <br />

                <input type="checkbox" />
                <label>Hazy</label>
                <br />

                <input type="checkbox" />
                <label>Sours</label>
                <br />

                <input type="checkbox" />
                <label>Barrel aged</label>
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