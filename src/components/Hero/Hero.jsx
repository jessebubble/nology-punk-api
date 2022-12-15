import Card from "./Card";

const Hero = () => {


  return (
    <>
      <div className="hero">
        <div className="hero-card">
          <Card />
        </div>
        
        <div className="hero-logo">
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Hero;