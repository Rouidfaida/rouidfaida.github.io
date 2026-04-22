import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { img: meter1, label: "React.js / Redux" },
    { img: meter2, label: "Node.js / Express" },
    { img: meter3, label: "MongoDB / MySQL" },
    { img: meter1, label: "Sécurité WAF / OWASP" },
    { img: meter2, label: "API REST" },
    { img: meter3, label: "Stripe / Paiements" },
    { img: meter1, label: "Git / Postman" },
    { img: meter2, label: "JavaScript ES6+" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences Techniques</h2>
              <p>Stack MERN complète, sécurité applicative et déploiement d'applications SaaS.<br/>
              Expérimentée en cybersécurité, WAF, OWASP Top 10 et intégrations de paiement sécurisées.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, i) => (
                  <div className="item" key={i}>
                    <img src={skill.img} alt={skill.label} />
                    <h5>{skill.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  )
}
