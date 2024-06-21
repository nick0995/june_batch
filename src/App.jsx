import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core building blocks."
              image={componentImg}
            />
            <CoreConcepts
              title="Components"
              description="The core building blocks."
              image={componentImg}
            />
            <CoreConcepts
              title="Components"
              description="The core building blocks."
              image={componentImg}
            />
            <CoreConcepts
              title="Components"
              description="The core building blocks."
              image={componentImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
