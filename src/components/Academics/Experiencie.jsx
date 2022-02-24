import React from "react";
import "./Academic.css";

const Experience = ({academics}) => {
    return <section className="experience">
        <h1>Experiencia</h1>
        {academics.map((item) => {
            return (
                <section className="section-experience" key={JSON.stringify(item)}>
                    {item.experience.map((value, item) =>{
                        return <div className="cont-experience" key={item}>
                            <p>{value.name}</p>
                            <p>{value.date}</p>
                            <p>{value.where}</p>
                            <p>{value.description}</p>
                        </div>
                    })
                    }
                </section>
            )
        })
        }
    </section>
}

export default Experience;