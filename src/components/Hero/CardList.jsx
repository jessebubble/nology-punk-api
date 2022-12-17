
const CardList = (props) => {
    const { handleChange, getCardDetails } = props;

    returnedB


    if (getCardDetails) {
        return handleChange;
    } else {

        return (
          
            <>
            <div className="card">
                <div className="card-content" key={beer.id}>
                    <div className="card-image">
                    <img src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className="card-text">
                    <h1>
                        {beer.name} <span> {beer.abv} abv</span>
                    </h1>
                    <h3>{beer.tagline}</h3>
                    <p>
                        {beer.description}
                        <br />
                        <span>Brewed since {beer.first_brewed}</span>
                    </p>
                    </div>
                </div>
            </div>
            </>
            
        );
    };
};

export default CardList;