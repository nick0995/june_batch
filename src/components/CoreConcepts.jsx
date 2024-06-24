export default function CoreConcepts({ image, title, description }) {
  console.log("CORE CONCEPTS");
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
