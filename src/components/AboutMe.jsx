import { useState } from "react";
import Section from "./Section";

function AboutMe() {
  const [visible, setVisible] = useState(true);

  return (
    <Section title="About Me">
      <h1>Hello! My name is Roger Cruz</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Details About Me
      </button>
      {visible && <p>A full-stack software engineer with experience coding in JavaScript, Node, React, TypeScript, SQL and Python.</p>}
    </Section>
  );
}

export default AboutMe;
