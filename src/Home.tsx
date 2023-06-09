import { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar';
import { Users } from './components/Users';
import { User } from './interfaces/types';
import { getUser, deleteUser } from './services/userService';

export const Home = () => {
    const [users, setUsers] = useState<User[]>();

    const getUsersList = async() => {
        const data = await getUser();
        setUsers(data);
    }

    const removeUser = async(userId: number) => {
        await deleteUser(userId);
        getUsersList();
    }

    useEffect(() => {
      getUsersList();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <NavBar />
                </div>
                <div className="col-12">
                <h3 className='mt-4 mb-4'>Listado de usuarios</h3>
                <div className="row">
                    {users?.map((item) => <Users key={item.id} removeUser={removeUser} user={item} />)}
                </div>
                </div>
            </div>
        </div>
    )
}
