import { Link } from "react-router-dom";
import { UserInterface } from "../views/UserList";
import { BsClockHistory, BsFillEnvelopeFill, BsFillTelephoneFill, BsFillArrowLeftCircleFill } from 'react-icons/all';


export const UserDetails = (props: UserInterface) => {
    const { name, age, email, phone } = props;
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-3 text-primary">
                <div className="w-100 text-center">
                    <h1 className="text-capitalize bg-primary text-white px-5 rounded w-100">{name}</h1>
                </div>
            </div>
            <div className="">
                <div className=""><h3><BsClockHistory /> Edad: <i className="text-secondary"><strong>{age}</strong> años</i></h3></div>
                <div className=""><h3><BsFillEnvelopeFill /> Correo: <i className="text-secondary"><strong>{email}</strong></i></h3></div>
                <div className=""><h3><BsFillTelephoneFill /> Teléfono: <i className="text-secondary"><strong>{phone}</strong></i></h3></div>
            </div>
            <hr />
            <div className="text-end">
                <Link to="/users" className="btn btn-primary btn-sm"><BsFillArrowLeftCircleFill />  Volver</Link>
            </div>
        </>
    )
}
