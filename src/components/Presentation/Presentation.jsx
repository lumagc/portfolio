import React from "react";
import "./Presentation.css"

const Presentation = ({aboutMe}) => {
    return <section className="presentation">
        { aboutMe.map((item) => {
            return (
                <div className="cont-presentation" key={JSON.stringify(item)}>              
                    <p className="name"> {item.profile.name} </p>
                    <p className="job"> {item.profile.job} </p>
                </div>
            )
        })
        }
    </section>
    
}

export default Presentation;