import Card from '../Hero/Card';
import CardList from './CardList';

const Hero = (props) => {
    const { searchResults } = props;

    return (
        <div className="hero">
            <div className="hero-logo">
                <img src="./logo.png" alt="logo"/>
            </div>
            <div className=""> 
                <Card />
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