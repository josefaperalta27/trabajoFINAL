import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function PropiedadesSelect() {
    const { propiedades, form, setForm } = useContext(AppContext);

    const handleChange = (event) => {
        // console.log(event.target.value);
        const selectedProp = propiedades.find((opcion) => opcion.id == event.target.value);
        // console.log(selectedProp);
    
        setForm({ ...form, selectedProp });
      };

    return (
        <>
            <label htmlFor="propiedad">Selecciona tipo de propiedad</label>
            <select className="input-group-text" id="propiedad" onChange={handleChange} required>
                <option value="" disabled="">...</option>
                {propiedades.map((propiedad) => (
                    <option key={propiedad.id} value={propiedad.id}>
                        {propiedad.tipo}
                    </option>
                ))}
            </select>
        </>
    )
}

export default PropiedadesSelect