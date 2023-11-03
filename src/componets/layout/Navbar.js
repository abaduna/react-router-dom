// SPA => recargar el comp que cambia
// CSR => Aprovechar la carg de componentes y no la recarga de pagina
//
import { Link,NavLink } from "react-router-dom";
// import UsersIndex from "./UsersIndex"; // Importa el componente UsersIndex
// import UserProfile from "./UserProfile"; // Importa el componente UserProfile
// import OwnUserProfile from "./OwnUserProfile"; // Importa el componente OwnUserProfile
const Navbar = () => {
    return (
        <>
    <nav className=" nav-manu">
      <ul className="nav">
        <li className=" nav-manu-li">
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className=" nav-manu-li">
          <NavLink to="/products">Products</NavLink>
        </li>

      </ul>
    </nav>
  
        </>

      );
  
}

export default Navbar