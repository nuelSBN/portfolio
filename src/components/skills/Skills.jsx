import './skills.css';
import html from '../../assets/images/html.jpg';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/React.png';
import tailwind from '../../assets/images/tailwind.jpg';

export default function Skills() {
  return (
    <section className="skills">
      <h1>skills</h1>
      <div className="skillsCardContainer">
        <div className="skillCard">
          <img src={html} alt="html" />
        </div>
        <div className="skillCard">
          <img src={css} alt="html" />
        </div>
        <div className="skillCard">
          <img src={tailwind} alt="html" />
        </div>
        <div className="skillCard">
          <img src={js} alt="html" />
        </div>
        <div className="skillCard">
          <img src={react} alt="html" />
        </div>
      </div>
    </section>
  );
}
