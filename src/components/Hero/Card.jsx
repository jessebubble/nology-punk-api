import CardList from "./CardList";

const Card = (props) => {
    const { handleChange} = props;

    const getCardDetails = () => {
        fetch (`https://api.punkapi.com/v2/beers`)
        .then((data) => {
          return data.json();
        })
        .then((returnedBeerData) => {
          return returnedBeerData.map((beer) => {
            return <CardList key={beer.id} image={beer.image_url} beer={beer.name} abv={beer.abv} tagline={beer.tagline} description={beer.description} born={beer.first_brewed} />;
          });
        });
      };

        return (
            <div>
                <CardList handleChange={handleChange} getCardDetails={getCardDetails}/>
            </div>
        );
    };

export default Card;