import React,{useState} from 'react';
import './login.css'; 
import api from '../services/api';
import logo from '../assets/logo.svg';

export default function Login({history}){
    const [username,setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        //TEST SESSION, IF SESSION EXISTS == REDIRECT TO MAIN, ELSE NOT EXISTS == CREATE NEW SESSION
        if(localStorage.getItem('session') == null){
            const response = await api.post('/developers',{
                username
            });
            localStorage.setItem('session',JSON.stringify(response.data));
            console.log(response.data); 
        }        
 
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
                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>
        </div>
    );
}
