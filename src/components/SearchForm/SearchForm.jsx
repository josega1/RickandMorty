import { useState } from "react";
import './SearchForm.css'
import search from "../images/backhome.png"

const SearchForm = ({ oeMeEstoyEnviando }) => {
    const [searchLocation, setSearchLocation] = useState("");
    const [errorSearchLocation, setErrorSearchLocation] = useState("");
    
    const handleChange = (e) => {
        const newValue = e.target.value;

        //Valida que desde el principio hasta el final del string haya solo numeros
        // if (!/^\d$/.test(newValue)) {

        if (newValue === "") {
          setErrorSearchLocation("");
        } else if (isNaN(Number(newValue))) {
          setErrorSearchLocation("El id debe ser un número");
        } else if (Number(newValue) < 1) {
          setErrorSearchLocation("El menor id existe es 1");
        } else if (Number(newValue) > 126) {
          setErrorSearchLocation("El id máximo existente es 126");
        } else {
          setErrorSearchLocation("");
        }

        setSearchLocation(e.target.value);
    };

const handleSubmit = (e) => {
    e.preventDefault();
    
    // Si no hya valor de busqueda p el valor tiene un error, no vamos hacer nada.
    if (errorSearchLocation) return;
    
    oeMeEstoyEnviando(searchLocation);
};

return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchLocation} onChange={handleChange} />
      <p style={{ color: "red" }} role="alert">
        {errorSearchLocation}
      </p>

      <button type="submit"><img src={search} alt="sumbit" /></button>
    </form>
  );
};

export default SearchForm;
