import { useParams } from 'react-router-dom';
import { UserDetails } from '../components/UserDetails';

import { data } from '../data/users';


export const UserShow = () => {
    const { user_id } = useParams();
    const user = data.filter(user => user.id === user_id)[0];


    return (
        <div className="container bg-white">
            <div className='py-3'>
                <UserDetails
                    id={user.id}
                    name={user.name}
                    age={user.age}
                    email={user.email}
                    phone={user.phone} />
            </div>
        </div>
    )
}
