import React,{useState} from 'react';
import './login.css'; 
import logo from '../assets/logo.svg';

export default function Login({history}){
    const [username,setUsername] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        
        

        history.push('/main');
    }

    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="Tingiter"/>
                <input
                    placeholder="Digite um usuário do github"
                    value={username}
                    onChange={e =>setUsername(e.target.value)}
                />
                <input
                    placeholder="Digite uma senha"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
