import React from "react";
import "./barNav.css"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const BarNav = () => {
    return <nav className="nav">
        <Link to="/">
          <button className="button-nav">Inicio</button>
        </Link>
        <Link to="/aboutMe">
          <button className="button-nav">Sobre mi</button>
        </Link>
        <Link to="/academics">
          <button className="button-nav">Academias</button>
        </Link>
        <Link to="/skills">
          <button className="button-nav">Habilidades</button>
        </Link>
        <Link to="/portfolio">
          <button className="button-nav">Proyectos</button>
        </Link>
        <Link to="/utilities">
          <button className="button-nav">Utilidades</button>
        </Link>
        <Link to="/contactme">
          <button className="button-nav">Contáctame</button>
        </Link>
    </nav>
}

export default BarNav;