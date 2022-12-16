
const CardList = (props) => {
    const { showCardDetails  } = props;  

    return (
        <div className="">
            {showCardDetails}
        </div>
    );
};

export default CardList;