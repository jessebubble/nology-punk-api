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
                            <span>{abv} abv</span>
                        </h1>

                        <h3 className="tagline">
                            {tagline}
                            <br />
                            <span> {description}</span>
                        </h3>
                        <p className="brewdate">
                            Brewed Since: <span>{firstBrewed}</span>
                        </p>
                        <p className="foodpairing">
                            Goes well with: <span className="food">{foodPairing}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

export default CardList;