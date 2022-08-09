import { useEffect, useState } from 'react';
import { UserService } from './../sevice/UserService';

const UserList = () => {

    const [list, setList] = useState([])

    const getUser = async () => {
        const temp = await UserService.getAllUsers()
        setList(temp.data)
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container my-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.address.city}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;