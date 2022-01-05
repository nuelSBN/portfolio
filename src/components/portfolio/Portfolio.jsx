import './portfolio.css';
import cv from '../../assets/images/personalCv.jpg';
import giovany from '../../assets/images/giovany.jpg';
import buildEasy from '../../assets/images/firstBuild.jpg';
import newBuildEasy from '../../assets/images/newBuild.jpg';
import connect from '../../assets/images/connectDash.jpg';
import emmaIgwe from '../../assets/images/emmaigwe.jpg';
import ex from '../../assets/images/ex.jpg';
import buildEcc from '../../assets/images/buildEcc.jpg';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h1>portfolio</h1>
      <div className="portfolios-container">
        <div className="portfolioCard">
          <a
            className="nav-links"
            href=" https://nuelsbn.surge.sh/"
            target="_blank"
          >
            <img src={cv} alt="" />
            <div className="textContainer">
              <p>
                title: <span>My personal CV</span>
              </p>
              <p className="link"></p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" https://emmanuel-igwenagu.surge.sh/"
            className="nav-links"
            target="_blank"
          >
            <img src={emmaIgwe} alt="" />
            <div className="textContainer">
              <p>
                title: <span>My personal CV</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" http://giovany.surge.sh/"
            className="nav-links"
            target="_blank"
          >
            <img src={giovany} alt="" />
            <div className="textContainer">
              <p>
                title: <span>giovany homes</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" https://be-landing.surge.sh/"
            className="nav-links"
            target="_blank"
          >
            <img src={buildEasy} alt="" />
            <div className="textContainer">
              <p>
                title: <span>Buildeasy landing page</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" https://oex.netlify.app/"
            className="nav-links"
            target="_blank"
          >
            <img src={ex} alt="" />
            <div className="textContainer">
              <p>
                title: <span>oex landing page</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" http://new-be-landing.surge.sh/"
            className="nav-links"
            target="_blank"
          >
            <img src={newBuildEasy} alt="" />
            <div className="textContainer">
              <p>
                title: <span>new buildeasy landing page</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" https://connect-point-dashboard.surge.sh/"
            className="nav-links"
            target="_blank"
          >
            <img src={connect} alt="" />
            <div className="textContainer">
              <p>
                title: <span>an admin dashboard</span>
              </p>
            </div>
          </a>
        </div>
        <div className="portfolioCard">
          <a
            href=" https://be-fe-ecommerce.vercel.app/"
            className="nav-links"
            target="_blank"
          >
            <img src={buildEcc} alt="" />
            <div className="textContainer">
              <p>
                title: <span>an ecommerce website</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
