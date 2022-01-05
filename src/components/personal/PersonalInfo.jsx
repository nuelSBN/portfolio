import './personal.css';

export default function PersonalInfo() {
  return (
    <section className="personal">
      <h1>personal info</h1>
      <div className="detailsContainer">
        <div className="singleDetail">
          <span className="norms">fullname</span>:
          <span className="caps"> Emmanuel chinedu igwenagu</span>
        </div>
        <div className="singleDetail">
          <span className="norms">email</span>:
          <span className="caps">
            <a className="nav-links" href="mailto:echinedu007@gmail.com">
              echinedu007@gmail.com
            </a>
          </span>
        </div>
        <div className="singleDetail">
          <span className="norms">phone</span>:
          <span className="caps">
            <a
              className="nav-links"
              href=" tel:+234-813-092-7634"
              target="_blank"
            >
              +234 813 092 7634
            </a>
          </span>
        </div>
        <div className="singleDetail">
          <span className="norms">whatsapp</span>:
          <span className="caps">
            <a
              href=" https://wa.me/2348130927634"
              className="nav-links"
              target="_blank"
            >
              +234 813 092 7634
            </a>
          </span>
        </div>
        <div className="singleDetail">
          <span className="norms">residential area</span>:
          <span className="caps">ikotun, lagos</span>
        </div>
        <div className="singleDetail">
          <span className="norms">CV</span>:
          <span className="caps">
            <a
              href=" https://nuelsbn.surge.sh/"
              className="nav-links"
              target="_blank"
            >
              click me
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
