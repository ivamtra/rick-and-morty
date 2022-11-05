import logo from "./logo.svg";
import "./App.css";
import image from "./images/kindpng_262500.png";
import eye from "./images/eye.png";
import { useEffect, useRef, useState } from "react";
import {eyeCoords} from './constants'
import Rick from "./Rick";
function App() {

  return (
    <>
    <div className="container">
      <Rick />
      <div className="ul-wrapper">
      <ul>
        <li>Verkefni 1</li>
        <li>Verkefni 2</li>
        <li>Verkefni 3</li>
        <li>Verkefni 4</li>
        <li>Verkefni 5</li>
        <li>Verkefni 6</li>
        <li>Verkefni 7</li>
        <li>Verkefni 8</li>
        <li>Verkefni 9</li>
      </ul>
      </div>

    </div>
    </>
  );
}

export default App;
