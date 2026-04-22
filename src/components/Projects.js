import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
  desktop:           { breakpoint: { max: 1400, min: 1024 }, items: 2 },
  tablet:            { breakpoint: { max: 1024, min: 600 },  items: 2 },
  mobile:            { breakpoint: { max: 600,  min: 0 },    items: 1 },
};

export const Projects = () => {

  const experiences = [
    {
      icon: "🔒",
      title: "Securas Technologies",
      period: "Mars 2023 — Aujourd'hui",
      description: "Conception et développement d'une application SaaS sécurisée MERN. Mise en place d'un WAF, sécurisation des API REST, intégration paiements Stripe & Click to Pay, gestion des webhooks.",
      tags: ["React", "Node.js", "MongoDB", "WAF", "Stripe", "OWASP"],
    },
    {
      icon: "🎓",
      title: "Pixelium — Sousse",
      period: "Oct 2022 — Jan 2023",
      description: "Développement d'une plateforme universitaire full-stack. Intégration front-end et back-end. Collaboration en équipe Agile pour la livraison de fonctionnalités évolutives.",
      tags: ["React", "Node.js", "Agile", "REST API", "Bootstrap"],
    },
    {
      icon: "🏭",
      title: "Quermes — Sousse",
      period: "Mars 2022 — Juin 2022",
      description: "Développement de systèmes de pilotage et de suivi de production pour l'Industrie 4.0. Tableaux de bord temps réel et visualisation des données.",
      tags: ["JavaScript", "Node.js", "Industrie 4.0", "Dashboard"],
    },
    {
      icon: "🎨",
      title: "Arts Graphiques Arrayen",
      period: "Fév 2018 — Sept 2021",
      description: "Conception de supports graphiques éducatifs et parascolaires. Création d'histoires illustrées pour enfants et matériaux pédagogiques.",
      tags: ["Design", "Illustration", "Éducation", "Créativité"],
    },
  ];

  const projets = [
    {
      icon: "🛡️",
      title: "Application SaaS Sécurisée",
      period: "2023 — Présent · Securas",
      description: "Plateforme SaaS complète avec authentification sécurisée, WAF intégré, protection OWASP Top 10 et paiements sécurisés via Stripe. Déployée en prod.",
      tags: ["MERN", "WAF", "OWASP", "Stripe", "Webhooks", "JWT"],
    },
    {
      icon: "🎓",
      title: "Plateforme Universitaire",
      period: "2022 · Pixelium",
      description: "Application web full-stack pour la gestion universitaire : cours, étudiants, emplois du temps. Développement front et back-end complet.",
      tags: ["React", "Express", "MongoDB", "Bootstrap", "Agile"],
    },
    {
      icon: "⚙️",
      title: "Système Suivi de Production",
      period: "2022 · Quermes",
      description: "Tableau de bord temps réel pour le pilotage industriel. Visualisation des données de production, alertes et reporting automatisé.",
      tags: ["JavaScript", "Node.js", "Dashboard", "Industrie 4.0"],
    },
    {
      icon: "🔐",
      title: "Audit Sécurité SI",
      period: "2016 · Sodimac (PFE Master)",
      description: "Audit technique complet de la sécurité du système d'information. Rapport de vulnérabilités, recommandations et plan de remédiation.",
      tags: ["Audit", "Sécurité SI", "OWASP", "Pentest"],
    },
  ];

  const formations = [
    {
      icon: "🚀",
      title: "Formation Full-Stack JavaScript",
      period: "Août — Déc 2021 · GOMYCODE Sfax",
      description: "Bootcamp intensif MERN stack : React, Node.js, Express, MongoDB. Projets pratiques, code review et déploiement d'applications.",
      tags: ["GOMYCODE", "React", "Node.js", "MongoDB"],
    },
    {
      icon: "🛡️",
      title: "Master — Audit & Sécurité Informatique",
      period: "FSEGS Sfax",
      description: "Master professionnel en cybersécurité : audit des systèmes d'information, cryptographie, gestion des risques et sécurité réseau.",
      tags: ["Cybersécurité", "Audit SI", "Cryptographie", "Master"],
    },
    {
      icon: "💻",
      title: "Licence — Informatique de Gestion",
      period: "FSEGS Sfax",
      description: "Formation en développement logiciel, bases de données, algorithmique et gestion de projets informatiques. Projet de fin d'études en C#.",
      tags: ["Licence", "Développement", "BDD", "C#"],
    },
    {
      icon: "⚡",
      title: "Bootcamp Get Into Tech",
      period: "Juin — Juil 2021 · Inco Academy",
      description: "Programme intensif Inco Academy & Minassa. Introduction aux métiers du numérique, développement web et culture tech.",
      tags: ["Inco Academy", "Minassa", "Web", "Tech"],
    },
  ];

  const renderCarousel = (items) => (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3500}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      dotListClass="custom-dot-list"
      itemClass="carousel-item-padding"
    >
      {items.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </Carousel>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Expériences & Projets</h2>
                <p>
                  Plus de <strong>3 ans</strong> d'expérience en développement Full-Stack JavaScript,
                  avec des réalisations en <strong>SaaS sécurisé</strong>, Industrie 4.0 et plateformes web.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">💼 Expériences</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">🚀 Projets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">🎓 Formation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {renderCarousel(experiences)}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {renderCarousel(projets)}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {renderCarousel(formations)}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  )
}
