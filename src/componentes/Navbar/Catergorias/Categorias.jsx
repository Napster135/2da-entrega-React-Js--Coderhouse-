import { Link } from 'react-router-dom';
const Categorias = () => {
    return (
             <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-dark">Categories</button>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/category/1"}>Computers</Link></li>
                  <li><Link className="dropdown-item" to={"/category/2"}>Cell Phones</Link></li>
                  <li><Link className="dropdown-item" to={"/category/3"}>Television</Link></li>
                  <li><Link className="dropdown-item" to={"/category/4"}> Electronics </Link></li>


                </ul>
              </li>
              
    );
}

export default Categorias;
