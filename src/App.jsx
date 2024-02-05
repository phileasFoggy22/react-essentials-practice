import Header from "./components/Header.jsx";
import InputSection from "./components/InputSection.jsx";
import ResultsTable from "./components/ResultsTable.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [identifier]: +newValue };
    });
  }
  return (
    <>
      <Header name="React Investment Calculator" />
      <InputSection userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p id="center">Invalid Duration</p>}
      {inputIsValid && <ResultsTable userInput={userInput} />}
    </>
  );
}

export default App;
