
const CardList = (props) => {
    const { showCardDetails  } = props;  

    return (
        <div className="card-content">
            {showCardDetails}
        </div>
    );
};

export default CardList;