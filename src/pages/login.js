import React from 'react';
import './login.css'; 
import logo from '../assets/logo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="Tingiter"/>
                <input
                    placeholder="Digite um usuário do github"
                />
                <input
                    placeholder="Digite uma senha"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
