import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='container bg-white text-center'>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="d-block">
                    <h2>Not Found</h2>
                    <Link to="/" className='btn btn-link text-decoration-none'>Volver</Link>
                </div>
                
            </div>

        </div>

    )
}
