import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("es");

  return (
    <div>
      <Field onChange={setInput} value={input} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate language={language} text={input} />
    </div>
  );
}
