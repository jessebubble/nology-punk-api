import CardList from "./CardList";

const Card = (props) => {
    const { showCardDetails, handleChange} = props;

    if (!handleChange) {
      return showCardDetails;
    } else {

    return (
        <div className="">
            <CardList showCardDetails={showCardDetails} />
        </div>
    );
};
}

export default Card;