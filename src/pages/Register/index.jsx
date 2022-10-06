import { Link } from 'react-router-dom';
import { useState } from 'react';
import register from '../../assets/register.svg';
import { IoRocket } from 'react-icons/io5';

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">

            <div className="container-bg">
                <h3>Cadastre-se<br/> e entre para o nosso time</h3>
                <img className="img" src={register} alt="Imagem de login" />
            </div>

            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">

                        <div className="login-form-title">
                            <IoRocket size={25} color="#21d4fd" />
                            <span>Criar conta</span>
                            <br/>
                        </div>

                        <div className="wrap-input">
                            <input 
                                className={name !== '' ? 'has-val input' : 'input' }
                                type="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Nome"></span>
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
                            <button className="login-btn">Cadastrar</button>
                        </div>

                        <div className="text-center">
                            <span className="txt-1">Já possui uma conta?</span>
                            <Link to="/" className="txt-2">Faça login!</Link>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}