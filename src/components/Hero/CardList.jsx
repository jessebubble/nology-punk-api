const CardList = (props) => {
        const { name, tagline, image, description, abv, firstBrewed, foodPairing } = props;

        return (
            <div className="card">
                <div className="card-content">
                    <div className="card-image">    
                        <img src={image} alt="beer" />
                    </div>
                    <div className="card-text">
                        <h1> 
                            {name} 
                            <span>{abv}</span>
                        </h1>

                        <h3>{tagline}</h3>
                        <p>
                            {description}
                            <br />
                            <span>{firstBrewed}</span>
                        </p>
                        <p>
                            <span className="food">{foodPairing}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

export default CardList;