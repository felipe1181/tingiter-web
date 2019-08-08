import React from 'react';

export default function Main({history}){ 

    //GET SESSION USER, AND TEST PAGE, IF SESSION NOT EXISTS, REDIRECT TO LOGIN PAGE
    const sessionUser = JSON.parse(localStorage.getItem('session'));
    if(sessionUser == null || sessionUser == ""){
        history.push('/');
        return(
            <center><h1>Sessão não encontrada!</h1></center>
        );
        
    }
    
    return(
        <h1>Bem vindo: {sessionUser.name}</h1>
    );
}