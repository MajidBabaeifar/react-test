import { useState } from 'react';
import { UserService } from './../sevice/UserService';
import loadingImage from '../assets/23.gif'

const UserList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])

    const getUser = async () => {
        try {
            setIsLoading(true)
            const temp = await UserService.getAllUsers()
            setIsLoading(false)
            setList(temp.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="container my-5">
            <button className='btn btn-dark' onClick={getUser}>
                click to call the Api
            </button>
            {
                isLoading && <div className='mt-5'><img src={loadingImage} alt="" /></div>
            }
            {!isLoading && <table className="cursor mt-3 table table-striped">
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
            </table>}
        </div>
    );
}

export default UserList;