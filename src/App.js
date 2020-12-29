import './App.css';
import React, { Fragment } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';


function App() {
  return (


    //O frangment só está aqui pq ele encapsula todos os elementos filhos
    //que é a regra do react
    <Container componenet="article" maxWidth="sm">
      <h1>Formulário de cadastro</h1>
      <FormularioCadastro />


    </Container>
    
  );
}

export default App;
