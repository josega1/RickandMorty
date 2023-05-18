import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacterByUrl } from "../../services/getCharacterByUrl";
import './ResidentCard.css'

const ResidentCard = ({ url }) => {
    const [resident, setResident] = useState(null);

    useEffect(() => {
        const loadResident = async () => {
            const residentData = await getCharacterByUrl(url);
            setResident(residentData);
        };

        loadResident(); 
    }, [url ]);

  return (

    <>
    { !resident ? <p>Loading Character</p> : (
      <article className="container">
        <div>
          <img src={resident.image} alt={resident.name} />
        </div>
  
        <h3 className="name">{resident.name}</h3>
        <ul className="info_card">
          <li>
            <b>Specie: </b> <br />
            {resident.species}
          </li>
          <li>
            <b>Origin: </b> <br />
            {resident.origin.name}
          </li>
          <li>
            <b>Status: </b> <br />
            {resident.status}
          </li>
          <li>
            <b>Appearances: </b> <br />
            {resident.episode.length}
          </li>
        </ul>
      </article>

    ) }
    
    </>
  );
};

ResidentCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResidentCard;
