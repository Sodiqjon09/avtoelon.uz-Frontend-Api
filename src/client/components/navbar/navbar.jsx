import { Link } from "react-router-dom";
import "./navbar.css";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavbarData } from "../../data/navbar/navbar";

const NavbarComponent = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  // const Post = () => {
  //   document.getElementById('header').style.display = 'none';
  //   document.getElementById('main').style.display = 'none';
  //   document.getElementById('car').style.display = 'none';
  //   document.getElementById('footer').style.display = 'none';
  // }

  return (
    <header id="header">
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
        <Link to='post'>
        <animated.button className="btn" style={styles}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span> Sotish</span>
      </animated.button>
        </Link>
      </div>
    </header>
  );
};

export default NavbarComponent;
