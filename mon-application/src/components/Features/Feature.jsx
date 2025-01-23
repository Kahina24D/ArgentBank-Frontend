import "./feature.scss";

const Feature = ({ image, descriptionImage, title, description }) => {
  return (
    <div className="feature-item">
      <img 
        src={image} 
        alt={descriptionImage} 
        className="feature-item-icon" 
      />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-description">{description}</p>
    </div>
  );
};

export default Feature;
