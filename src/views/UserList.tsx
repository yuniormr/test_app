import React, {FormEvent, useEffect, useState} from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { data } from '../data/users';

import { BsFillPersonPlusFill, BsFillEyeFill, BsFillTrashFill, BsPencilFill, BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/all';

export interface UserInterface {
    id: string,
    name: string,
    age: string,
    email: string,
    phone: string
}

type FormActionType = 'NEW' | 'EDIT';

export const UserList = () => {
    const [users, setUsers] = useState<UserInterface[]>(data);

    const [currentUser, setCurrentUser] = useState<UserInterface>(
        {
            id: '',
            name: '',
            age: '',
            email: '',
            phone: ''
        }
    );

    const [formVisible, setFormVisible] = useState(false);
    const [formAction, setFormAction] = useState<FormActionType>();
    const [formErrors, setFormErrors] = useState<string[]>([]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        let errors = [];
        if (currentUser.name === '') {
            // setFormErrors(formErrors => [...formErrors, 'El campo Nombre no puede estar vacio']);
            errors.push('El campo Nombre no puede estar vacio');
        }
        if (currentUser.age === '') {
            // setFormErrors(formErrors => [...formErrors, 'El campo Edad no puede estar vacio']);
            errors.push('El campo Edad no puede estar vacio');
        }
        if (currentUser.email === '') {
            // setFormErrors(formErrors => [...formErrors, 'El campo Correo no puede estar vacio']);
            errors.push('El campo Correo no puede estar vacio');
        }
        if (currentUser.phone === '') {
            // setFormErrors(formErrors => [...formErrors, 'El campo Telefono no puede estar vacio']);
            errors.push('El campo Telefono no puede estar vacio');
        }
        setFormErrors(errors);

        if (errors.length === 0) {
            setFormErrors([]);
            if (currentUser.id === '' || currentUser.id === undefined) {
                currentUser.id = uuid();
                setUsers([...users, currentUser]);
                setFormVisible(false);
                console.log(currentUser);

            } else {
                let editIndex = users.findIndex(user => (user.id === currentUser.id));
                users.splice(editIndex, 1, currentUser);
                setUsers(users);
                setFormVisible(false);
            }
        }

    }

    function handleClick(action: string, id?: string) {
        switch (action) {
            case 'DELETE':
                setUsers(users.filter(user => user.id !== id));
                break;
            case 'EDIT':
                const user = users[users.findIndex(user => user.id === id)];
                setCurrentUser(currentUser => ({
                    ...currentUser,
                    id: user.id,
                    name: user.name,
                    age: user.age,
                    email: user.email,
                    phone: user.phone
                }));
                setFormAction('EDIT');
                setFormVisible(true);
                break;

            case 'CREATE':
                setCurrentUser({
                    id: '',
                    name: '',
                    age: '',
                    email: '',
                    phone: ''
                });
                setFormAction('NEW');
                setFormVisible(true);
                break;

            case 'CANCEL':
                setFormVisible(false);
                break;

            default:
                break;
        }
    }

    function handleChange(e: any) {
        switch (e.target.id) {
            case 'formName':
                setCurrentUser({ ...currentUser, name: e.target.value });
                break;

            case 'formAge':
                setCurrentUser({ ...currentUser, age: e.target.value });
                break;

            case 'formEmail':
                setCurrentUser({ ...currentUser, email: e.target.value });
                break;

            case 'formPhone':
                setCurrentUser({ ...currentUser, phone: e.target.value });
                break;

            default:
                break;
        }
    }

    return (
        <div className='container'>
            <div className="bg-white py-3">
                <div className='section-list'>
                    <div >
                        <h1 className='text-center'>Lista de Usuarios</h1>
                        <div className='text-end mx-2' >
                            <Button
                                variant='success'
                                size='sm'
                                onClick={() => handleClick('CREATE')}>
                                    <BsFillPersonPlusFill />&nbsp;
                                    Agregar Usuario
                                </Button>
                        </div>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    {/* <th>Correo</th>
                                    <th>Teléfono</th> */}
                                    <th className='text-end'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.id} id={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        {/* <td>{user.email}</td>
                                        <td>{user.phone}</td> */}
                                        <td className='text-end'>
                                            <Link to={'/user/' + user.id} className="btn btn-sm btn-info">
                                            <BsFillEyeFill />&nbsp;
                                                Mostrar
                                            </Link>
                                            <Button onClick={() => handleClick('EDIT', user.id)} variant="warning" size="sm" className="ms-1">
                                            <BsPencilFill />&nbsp;
                                                Editar
                                            </Button>
                                            <Button onClick={() => handleClick('DELETE', user.id)} variant="danger" size="sm" className="ms-1">
                                                <BsFillTrashFill />&nbsp;
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className={formVisible ? 'mx-5 my-4 border border-secondary border-2 rounded p-2 mb-5 bg-secondary bg-opacity-25 ' : 'd-none'}>
                        <div className="row ">
                            <div className="">
                                <h3 className="text-center text-primary">{ formAction === 'NEW' ? 'Agregar ' : 'Editar '} Usuario</h3>
                                <hr/>
                                <div className="text-danger">
                                    <ul>
                                        { formErrors?.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        )) }

                                    </ul>
                                </div>
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Nombre" value={currentUser.name} onChange={handleChange} />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formAge">
                                                <Form.Label>Edad</Form.Label>
                                                <Form.Control type="text" placeholder="Edad" value={currentUser.age} onChange={handleChange} />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formEmail">
                                                <Form.Label>Correo</Form.Label>
                                                <Form.Control type="email" placeholder="Correo" value={currentUser.email} onChange={handleChange} />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formPhone">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control type="text" placeholder="Teléfono" value={currentUser.phone} onChange={handleChange} />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Button variant='danger' size="sm" onClick={() => handleClick('CANCEL')}>
                                            <BsFillXCircleFill />&nbsp;
                                            Cancelar
                                        </Button>
                                        <Button variant="primary" size="sm" type="submit">
                                            <BsCheckCircleFill />&nbsp;
                                            Guardar
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
