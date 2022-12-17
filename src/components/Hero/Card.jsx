import CardList from "./CardList";

const Card = (props) => {
    const { handleChange, getCardList } = props;

    return (
        <div>
            <CardList handleChange={handleChange} getCardList={getCardList} />
        </div>
    );
};

export default Card;