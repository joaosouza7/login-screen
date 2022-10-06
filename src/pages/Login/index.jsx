import { Link } from 'react-router-dom';
import { useState } from 'react';
import loginImg from '../../assets/login.svg';
import { IoLogIn } from 'react-icons/io5';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">

            <div className="container-bg">
                <h3>Faça login<br/> E entre para o nosso time</h3>
                <img className="img" src={loginImg} alt="Imagem de login" />
            </div>

            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">

                        <div className="login-form-title">
                            <IoLogIn size={28} color="#21d4fd" />
                            <span>Bem-vindo </span>
                            <br/>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={email !== '' ? 'has-val input' : 'input' }
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="E-mail"></span>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={password !== '' ? 'has-val input' : 'input' }
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>

                        <div className="container-form-btn">
                            <button className="login-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt-1">Não possui conta?</span>
                            <Link to="/register" className="txt-2">Criar uma conta.</Link>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}