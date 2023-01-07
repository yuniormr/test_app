import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-center'>Bienvenid@</Card.Title>
                        <Card.Text>
                            Haz clic en el boton <strong>Entrar</strong> para acceder a la Lista de Usuarios.
                        </Card.Text>
                        <div className="text-center">
                        <Link to="/users" className='btn btn-primary'>Entrar</Link>
                        </div>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
