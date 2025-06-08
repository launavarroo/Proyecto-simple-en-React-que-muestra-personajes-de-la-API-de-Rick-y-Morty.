import '../styles/Card.css';

function Card({ title, content, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} loading="lazy" />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;