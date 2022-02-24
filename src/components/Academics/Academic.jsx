import React from "react";
import "./Academic.css";
import Education from "./Education";
import Experience from "./Experiencie";
import { useState } from "react";


const Academic = ({academics}) => {
    //Variables de estado para el evento 
    const [showAcademic, setShowAcademic] = useState(true);


    return <section className="academics">
      <div className="cont-buttons">
        <button className="button-es" onClick={() => setShowAcademic(true) } > Education </button>
        <button className="button-ex" onClick={() => setShowAcademic(false) } > Experience </button>
      </div>
        {
          showAcademic ? (
            <Education academics={academics} />
          ):(
            <Experience academics={academics} />
          )
        }
    </section>
}

export default Academic;