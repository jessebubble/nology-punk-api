

const CardList = (props) => {

    return (

        <div className="card-content">
            <h1>
                {props.name}
            </h1>
            <p>
                {props.description}
            </p>
            <p>card description</p>
        </div>
    );
};

export default CardList;