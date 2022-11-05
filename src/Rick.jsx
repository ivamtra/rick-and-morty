import logo from "./logo.svg";
import "./App.css";
import image from "./images/kindpng_262500.png";
import eye from "./images/eye.png";
import { useEffect, useRef, useState } from "react";
import {eyeCoords} from './constants'
function Rick() {
  const rickImg = useRef();
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  const mortyLeftEye = useRef()
  const mortyRightEye = useRef()
  const rickLeftEye = useRef()
  const rickRightEye = useRef()

  const [mortyLeftEyeAngle, setMortyLeftEyeAngle] = useState(0)

  useEffect(() => {
    setMortyLeftEyeAngle(eyeToCursorAngle(eyeCoords.morty.left, globalCoords))
    //console.log(eyeToCursorAngle(eyeCoords.morty.left, globalCoords))
    console.log(mortyLeftEyeAngle)
    
  })




  const eyeToCursorAngle = (eye, cursorCoords) => {

    const offset = 25

    const width = eye.x + offset- cursorCoords.x
    const height = eye.y - cursorCoords.y

    let returnAngle = Math.atan(height/width)

    if (width > 0)
      returnAngle += Math.PI;


    return returnAngle
  }

  const rotateImg = (img, angle) => {
    img.style.transform = `rotate(${angle})`

  }

  

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <img ref={rickImg} src={image} alt="" className="rick-image" />
        <img ref={mortyLeftEye} src={eye} alt="" className="morty-left-eye" style={{transform: `rotate(${mortyLeftEyeAngle}rad)`}}/>
        <img ref={mortyRightEye} src={eye} alt="" className="morty-right-eye" style={{transform: `rotate(${mortyLeftEyeAngle}rad)`}}/>
        <img ref={rickLeftEye} src={eye} alt="" className="rick-left-eye" style={{transform: `rotate(${mortyLeftEyeAngle}rad)`}}/>
        <img ref={rickRightEye} src={eye} alt="" className="rick-right-eye" style={{transform: `rotate(${mortyLeftEyeAngle}rad)`}}/>
      </div>
    </>
  );
}

export default Rick;
