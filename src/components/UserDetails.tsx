import { Link } from "react-router-dom";
import { UserInterface } from "../views/UserList";


export const UserDetails = (props: UserInterface) => {
    const { id, name, age, email, phone } = props;
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-3 text-primary">
                <div className="">
                    <h1 className="text-uppercase">{name}</h1>
                </div>
            </div>
            <div className="">
                <div className=""><h3>Edad: <i className="text-secondary"><strong>{age}</strong> años</i></h3></div>
                <div className=""><h3>Correo: <i className="text-secondary"><strong>{email}</strong></i></h3></div>
                <div className=""><h3>Teléfono: <i className="text-secondary"><strong>{phone}</strong></i></h3></div>
            </div>
            <hr />
            <div className="text-end">
                <Link to="/users" className="btn btn-primary btn-sm">Volver</Link>
            </div>
        </>
    )
}
