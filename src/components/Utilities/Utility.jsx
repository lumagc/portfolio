import React, { useState } from "react";
import "./Utility.css"
import axios from "axios";

const Utility = () => {
    const[pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    
    const getPokemon = async () => {
        const toArray = [];
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if(!pokemon.trim()){
            console.log("El campo pokemon esta vacío")
            return
        }
        getPokemon();
        ev.target.reset()
        setPokemon("")
    }

    return <section className="utility">
        <h1>Utilities</h1>
        <form className="formpoke" onSubmit={handleSubmit}>
            <input type="text" placeholder="Busca un pokemon" onChange={ (ev) => setPokemon(ev.target.value.toLowerCase())} value={pokemon} />
            <button type="submit">Buscar</button>
        </form>
        <div className="cont-details">
        {pokemonData.map((poke) => {
            const id = poke.location_area_encounters.split('/').at(-2);
            return (
                <div className="details-pokemon" key={id}>
                    <h4>{poke.name}</h4>
                    <img src={poke.sprites["front_default"]} alt="img-pokemon" />
                    <div>
                        <p>Tipo: {pokemonType} </p>
                        <p>Numero: {id}</p>
                        <p>Peso: {poke.weight}</p>
                        <p>Altura: {poke.height}</p>
                        {poke.stats.map((st, item) => {
                            return <p key={item}>{st.stat.name} : {st.base_stat}</p>  
                        })
                        }
                    </div>
                </div>
            )
        })
        }
        </div>
    </section>
}

export default Utility;