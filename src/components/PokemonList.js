import React from "react";

const PokemonList = ({pokemon}) => {
    return(
        <div className="names">
            {
                pokemon.map((p) => (
                    <h3 className="p" key={p}>{p}</h3>
                ))
            }
        </div>
    )
}

export default PokemonList;