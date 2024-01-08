import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import "./navbar.css";
import { NavbarData } from "../../data/navbar/navbar";

const NavbarComponent = () => {
  return (
    <header>
      <div id="headerName">
        <div>
          <h1>avtoelon.uz</h1>
        </div>
        <ul>
          {NavbarData?.map((car) => (
            <li key={car.id}>
              <Link to={car.Link}>{car.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div id="headerTwo">
        <AnimatedButton />
      </div>
    </header>
  );
};

export default NavbarComponent;
