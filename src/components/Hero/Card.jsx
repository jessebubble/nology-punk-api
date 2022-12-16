import CardList from "./CardList";

const Card = (props) => {

    const { showCardDetails } = props;


    return (
        <div className="card">
            <CardList showCardDetails={showCardDetails} />
        </div>
    );
};

export default Card;