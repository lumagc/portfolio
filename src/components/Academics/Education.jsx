import React from "react";
import "./Academic.css";

const Education = ({academics}) => {
    return <section className="education">
        <h1>Formación</h1>
        {academics.map((item) => {
            return (
                <section className="section-education" key={JSON.stringify(item)}>
                    {item.education.map((value, item) =>{
                        return <div className="cont-education" key={item}>
                            <p>{value.name}</p>
                            <p>{value.date}</p>
                            <p>{value.where}</p>
                        </div>
                    })
                    }
                </section>
            )
        })
        }
    </section>
}

export default Education;