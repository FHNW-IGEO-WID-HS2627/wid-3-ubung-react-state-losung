import "./app.css";
import { useState } from "react";
import { Aufgabe1, Aufgabe2, Aufgabe3, Aufgabe4 } from "./static/ExText";

function App() {
  const [counter, setCounter] = useState(0); // useState Hook für Aufgabe 1
  const [checkboxState, setCheckboxState] = useState(true);
  const [text, setText] = useState("");
  const [alignState, setAlignState] = useState("left");
  const [fontSizeState, setFontSizeState] = useState(10);

  return (
    <div className="App">
      <div className="App-header ">WID 3 - Übung useState (Lösung) </div>
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <div className="Anzeige"> {counter} </div>
          <button className="Button" onClick={() => setCounter(counter + 1)}>
            + 1
          </button>
          <button className="Button" onClick={() => setCounter(counter + 5)}>
            + 5
          </button>
          {/* Nachfolgende Zeile: Du setzt den Zähler auf 0. Der aktuelle Wert des Zählers wird daher nicht benötigt. */}
          <button className="Button" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <input
            id="Checkbox"
            type="checkbox"
            checked={checkboxState} // "controlled component"
            onChange={() => setCheckboxState(!checkboxState)}
          ></input>
          <div>
            <p style={{ color: checkboxState ? "#33ff33" : "red" }}>
              {checkboxState ? "JA" : "NEIN"}
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe3 />
        <div className="WrapperHorizontal">
          {/* Im Input-Element fügst du ein weiteres Attribut mit dem Schlüssel `value`hinzu und weist die State-Variable in {}-Klammern als Wert zu. */}
          <input
            id="textfeld"
            type="text"
            value={text}
            onChange={
              (e) =>
                setText(
                  e.target.value,
                ) /* Hier brauchst du wieder eine setState Funktion. Sie soll e.target.value als Argument bekommen und dies in State schreiben. */
            }
          />
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe4 />
        <div className="WrapperHorizontal">
          <select
            onChange={(event) => {
              setAlignState(event.target.value);
            }}
          >
            <option value="left">Links</option>
            <option value="center">Mittig</option>
            <option value="right">Rechts</option>
          </select>
          <select
            onChange={(event) => {
              console.log(event.target.value);
              setFontSizeState(parseInt(event.target.value));
            }}
          >
            {/* Auch Zahlen werden im Event Objekt 
            als Text behandelt und müssen mit parseInt() zu Nummern gecastet werden: */}
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
          </select>
          <div>
            <p
              id="DynamicText"
              style={{ textAlign: alignState, fontSize: fontSizeState }}
            >
              Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
