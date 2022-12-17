import Card from '../Hero/Card';

const Hero = (props) => {
    const { handleChange } = props;

    return (
      <>
        <div className="hero">
          <div className="hero-logo">
            <img src="./logo.png" alt="logo" />
          </div>
          <div className ="">
            <Card handleChange={handleChange} />
          </div>
        </div>
      </>
    );
  }

export default Hero;