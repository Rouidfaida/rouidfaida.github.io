import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
      const toRotate = [ "Full-Stack Developer", "MERN Stack Engineer", "Web Security Expert" ];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue sur mon Portfolio</span>
                <h1>Bonjour, je suis <strong>Faida</strong>{" "}
                  <span className="txt-rotate" dataPeriod="1000">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>
                  Développeuse Full-Stack JavaScript avec une forte expertise en développement
                  d'applications web sécurisées, combinant l'ingénierie MERN avec des pratiques
                  d'audit et de cybersécurité. Basée à Sfax, Tunisie.
                </p>
                <a href="mailto:rouidfaida@gmail.com">
                  <button>Contactez-moi <ArrowRightCircle size={25} /></button>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
