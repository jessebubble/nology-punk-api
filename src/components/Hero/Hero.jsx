import Card from '../Hero/Card';
import CardList from './CardList';
import FilterList from '../NavBar/FilterList';

const Hero = (props) => {
    const { searchResults } = props;

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>More than just a beer </h1>
                <p>The Punk API takes Brewdog's DIY Dog and turns it into a searchable, filterable API that's completely free and open source.</p>
            </div>
            <div className="hero-button">
                <a href="https://punkapi.com/">
                    <button>Learn more about Punk API</button>
                </a>
                <a href="https://www.brewdog.com/">
                    <button>Order your next Brewdog</button>
                </a>
            </div>
            <div className="hero-logo">
                <img src="./logo.png" alt="logo"/>
            </div>
            <div className="hero-cards"> 
                <Card />
                {}
                <FilterList />
                {searchResults.map((beer, index) => {
                    if (searchResults.length > 0) {
                        document.querySelector('.hero-logo').style.display = "none";
                    }
                    return (
                        <CardList
                            key={index}
                            name={beer.name}
                            tagline={beer.tagline}
                            image={beer.image_url}
                            description={beer.description}
                            abv={beer.abv}
                            firstBrewed={beer.first_brewed}
                            foodPairing={beer.food_pairing}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Hero;