import React from "react";
import "./ContactMe.css";
import { useState } from "react";

const initial_state = {
    name: '',
    email: '',
    message: ''
}
const ContactMe = () => {
    const [formData, setFormData] = useState(initial_state);
    const submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        setFormData(initial_state);
        
    }
    const inputChange = (ev) => {
        ev.preventDefault();
        setFormData({
            ...formData, [ev.target.name] : ev.target.value
        });
    }
    
    return ( 
        <section className="contactMe">
            <h1 className="title">Contact Me</h1>
            <form className="form" onSubmit={submitForm}>
                <label htmlFor="name">Nombre:<br/>
                <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={inputChange} value={formData.name} />
                </label>

                <label htmlFor="email">Correo:<br/>
                <input type="email" id="email" name="email" placeholder="Ingrese su email" onChange={inputChange} value={formData.email} />
                </label>

                <textarea name="message" id="message" rows="10" cols="30" placeholder="Escriba su mensaje..." onChange={inputChange} value={formData.message}></textarea>
    
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default ContactMe;