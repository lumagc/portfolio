import React from "react";
import "./Portfolio.css";

const Portfolio = ({portfolio}) => {
    return <section className="portfolio">
        <h1>Proyectos</h1>
        {portfolio.map((item) => {
            return (
            <section className="section-portfolio" key={JSON.stringify(item)}>
                {item.proyects.map((value, item) =>{
                    return <div className="proyects-list" key={item}>
                        <h3>{value.name}</h3>
                        <p>{value.description}</p>
                        <p>{value.autor}</p>
                        <p><a href={value.link} target="_blank">Enlace al proyecto en Github</a></p>
                    </div>
                })
                }
            </section>
            )
        })

        }
    </section>
}

export default Portfolio;