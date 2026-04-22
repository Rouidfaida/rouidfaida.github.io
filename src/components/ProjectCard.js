import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, period, tags, icon }) => {
  return (
    <div className="exp-card">
      <div className="exp-card-top">
        <span className="exp-card-icon">{icon || "💼"}</span>
        <span className="exp-card-period">{period}</span>
      </div>
      <h4 className="exp-card-title">{title}</h4>
      <p className="exp-card-desc">{description}</p>
      {tags && (
        <div className="exp-card-tags">
          {tags.map((tag, i) => (
            <span key={i} className="exp-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}
