import Card from "./Card";

const Hero = (props) => {

  const { showCardDetails, handleChange, showCard} = props;

  if (handleChange) {
    return showCardDetails;
  }

  return (
    <>
      <div className="hero">
        <div className="hero-card">
          <Card showCard={showCard}/>
        </div>
        
        <div className="hero-logo">
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Hero;