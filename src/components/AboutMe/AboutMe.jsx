import React from "react";
import "./AboutMe.css";

const AboutMe = ({aboutMe}) => {
    return <section className="aboutMe">
        {aboutMe.map((item) => {
            return (
                <section className="cont-aboutme" key={JSON.stringify(item)}>
                    <div className="my-description">
                        <h1>Holaaa!.</h1>
                        <p>Me llamo {item.profile.name}</p>
                        <p> Naci el {item.profile.birthDate} </p>
                        <p> Actualmente vivo en {item.profile.city} </p>
                        <p> {item.profile.history} </p>
                        <p> La frase que mejor me define: <span>"{item.profile.sentence}"</span> </p>
                    </div>
                    <div className="passions">
                        <h1>Mi pasatiempo y hobbies se basan en:</h1>
                        <div className="passion-list">
                        {item.passions.map((value, item) =>{
                            return <p key={item}> {value} </p>
                        })
                        }
                        </div>
                    </div>
                </section>
            )
        })
        }
    </section>
}

export default AboutMe;
