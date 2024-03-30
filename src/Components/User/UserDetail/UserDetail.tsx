import { UserDetailProps } from './UserDetail.model';
import './UserDetail.scss';

const UserDetail: React.FC<UserDetailProps> = ({ user }) => (
    <div className="user-detail">
        <h3>Detail:</h3>
        <p><b>Email:</b> {user.email}   <b>Phone: </b>{user.phone}</p>
        <p><b>Web Site :</b> {user.website}</p>
        <p><b>Address :</b> {user.address?.street} {user.address?.suite}</p>
        <p><b>City :</b> {user.address?.city} <b>Zip Code:</b>{user.address?.zipcode}</p>
    </div>
);

export default UserDetail;
