import './hero.css';
import emma from '../../assets/images/emmaTwo.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroTitle">
        <div className="imageContainer">
          <img src={emma} alt="" />
        </div>
        <h3>Front Developer</h3>
        <h1>Emmanuel Igwenagu</h1>
        <p>(Reactjs)</p>
      </div>
    </section>
  );
}
