import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';

import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import logo from '../assets/logo.svg';

import './main.css';

export default function Main({history}){ 
    

    //GET SESSION USER, AND TEST PAGE, IF SESSION NOT EXISTS, REDIRECT TO LOGIN PAGE
    const sessionUser = JSON.parse(localStorage.getItem('session'));
    if(sessionUser === null || sessionUser === ""){
        history.push('/');
    }
    
    const [users,setUsers] = useState([]);
    useEffect(() =>{
        async function loadUsers(){
            const response = await api.get('/developers',{
                headers:{
                    user: sessionUser._id
                }
            });
            console.log(response.data);
            setUsers(response.data);
        }
        loadUsers();
    },[sessionUser._id]);

    async function handleLike(id){
        console.log(`id like: ${id}`); 
         const response  = await api.post(`/developers/${id}/like`,null,{
            headers:{user:sessionUser._id}
        });  
        console.log(response.data);
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDisLike(id){
        console.log(`id dislike: ${id}`);   
          await api.post(`/developers/${id}/deslike`,null,{
            headers:{user:sessionUser._id}
        });  
        setUsers(users.filter(user => user._id !== id));
    }
    function handleSair(){
        localStorage.removeItem('session');
    }
    return(
        
        <div className="main-container">
            <div className="menu-container">
                <strong>{sessionUser.name}</strong>
                <img src={logo} alt="tingiter"></img>
                <Link to="/" onClick={handleSair}>Sair</Link>
            </div>
               <div className="content-container">
                <ul>
                        {users.map(user => (
                            <li key={user._id} >
                                <img src={user.avatar} alt={user.avatar}></img>
                                <footer>
                                    <strong>{user.name}</strong>
                                    <p>{user.bio}</p>
                                </footer>
                                <div className="buttons">
                                        <button type="button" onClick={()=>{handleDisLike(user._id)}}>
                                            <img src={dislike} alt="dislike"></img>
                                        </button>        
                                        <button type="button"onClick={()=>{handleLike(user._id)}}>
                                            <img src={like} alt="like"></img>
                                        </button>
                                </div>
                            </li> 
                        ))}
                    </ul>
               </div>
        </div>
    );
}