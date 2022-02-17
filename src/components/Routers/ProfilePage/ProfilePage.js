import { Outlet } from 'react-router-dom';


const ProfilePage = () => {
    return (
        <section className="profile-page">
            <Outlet />
        </section>
    );
}

export default ProfilePage;