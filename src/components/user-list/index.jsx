import {useSelector} from 'react-redux';
import {selectUsers} from '../../redux/selectors';

const UserList = () => {
    const users = useSelector(selectUsers);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;