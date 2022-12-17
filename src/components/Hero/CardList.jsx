const CardList = (props) => {
    const { handleChange, getCardList } = props;

    if (handleChange) {
        return (
            <div>
                {getCardList}
            </div>
        );
    }

    return (
        <div>
        </div>
    );
};

export default CardList;