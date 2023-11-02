// SPA => recargar el comp que cambia
// CSR => Aprovechar la carg de componentes y no la recarga de pagina
//
import { Link } from "react-router-dom";
// import UsersIndex from "./UsersIndex"; // Importa el componente UsersIndex
// import UserProfile from "./UserProfile"; // Importa el componente UserProfile
// import OwnUserProfile from "./OwnUserProfile"; // Importa el componente OwnUserProfile
const Navbar = () => {
    return (
        <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>

      </ul>
    </nav>
  
        </>

      );
  
}

export default Navbar