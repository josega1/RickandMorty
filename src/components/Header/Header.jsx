import './Header.css'
import portal from "../images/PortalAndTitle.gif"

const Header = () => {
  return (
    <>
        <div className="portal">
          <img src={portal} alt="portal" />
        </div>
    </>
  );
};

export default Header;
