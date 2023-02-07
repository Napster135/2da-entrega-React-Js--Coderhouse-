import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"} ><button className="btn btn-dark">Home</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}><button className="btn btn-dark">Contacts</button></Link>
            </li>
        </>
    );
}

export default Secciones;