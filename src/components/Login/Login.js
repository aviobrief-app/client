
import { ReactComponent as PinkCarpet } from './assets/PinkCarpet.svg'
import LoginForm from 'components/Login/LoginForm/LoginForm';


import './Login.scss';
const Login = () => {
    return (
        <section className="login">
            <aside className="left-graphics">
                <PinkCarpet className="pink-carpet" />
                <a className="credit" href="https://www.freepik.com/vectors/food">Food vector created by stories - www.freepik.com</a>
            </aside>
            <LoginForm />
        </section>
    )
}

export default Login;