import React from "react";
import "./Skill.css";

const Skills = ({skills}) => {
    return <section className="skills">
        {skills.map((item) => {
            return (
            <section className="section-skills" key={JSON.stringify(item)}>
                <div className="aptitudes">
                    <h3 className="title">Aptitudes</h3>
                    {item.aptitudes.map((value, item) =>{
                        return(
                            <p key={item}> {value} </p>
                        )
                    })
                    }
                    
                </div>
                <div className="languages">
                    <h3 className="title">Idiomas</h3>
                    <p>Ingles nivel : {item.languages.english} </p>
                    <p>Español nivel : {item.languages.spanish}</p>
                </div>
                <div className="habilities">
                    <h3 className="title">Habilidades</h3>
                    <p>Lenguajes de programación : {item.habilities[0].join(", ")} </p>
                    <p>Frameworks : {item.habilities[1].join(", ")} </p>
                    <p>Lenguajes de marcado : {item.habilities[2].join(", ")} </p>
                    <p>Lenguajes de estilos : {item.habilities[3].join(", ")} </p>
                    <p>Bases de datos : {item.habilities[4].join(", ")} </p>
                    <p>Herramientas : {item.habilities[5].join(", ")} </p>
                </div>
            </section>
            )
        })

        }
    </section>
}

export default Skills;