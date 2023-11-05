import * as React from "react";
import { Link } from "react-router-dom";
import Formulario from "./componentes/Formulario";

function Inicio () {
    
    return (
        <>
            <h1>Seguro de Propiedades</h1>
            <Formulario/>
            <Link to={"historial"}>
                <button class="btn btn-primary">
                    Historial
                </button>
            </Link>
        </>
    )
}

export default Inicio