import { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) {
    // Select button --> 'component', jsx, prop, state
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  console.log(" APP COMPONENT");
  console.log("Inside the component", selectedTopic);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("component")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

// onclick --> onSelect def (a function) --> call the func (inside the app component)
export default App;
