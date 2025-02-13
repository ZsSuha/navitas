import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Power Up</h1>
      <ul>
        <li>
          <Link to="/">Főoldal</Link>
        </li>
        <li>
          <Link to="/about">Rólunk</Link>
        </li>
        <li>
          <Link to="/services">Szolgáltatások</Link>
        </li>
        <li>
          <Link to="/contact">Kapcsolat</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
