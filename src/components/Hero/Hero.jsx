import Card from "./Card";

const Hero = () => {


  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Hero Section</h1>
          <p>Hero section description</p>
        </div>

        <div className="hero-card">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Hero;