import PropTypes from "prop-types";
import './Location.css'

const Location = ({ location }) => {
  return (
    <div className="container_location">
      <h2>{location.name}</h2>

      <ul>
        <li>
          <b>Type: </b>
          {location.type}
        </li>
        <li>
          <b>Dimension: </b>
          {location.dimension}
        </li>
        <li>
          <b>Population: </b>
          {location.residents.length}
        </li>
      </ul>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string,
    residents: PropTypes.array,
  }),
};

export default Location;
