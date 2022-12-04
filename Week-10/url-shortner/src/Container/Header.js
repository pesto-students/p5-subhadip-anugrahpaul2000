import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navigation">
        <div className="nav-center">
          <ul className="unordered-list">
            <li className="listItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="listItem">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
