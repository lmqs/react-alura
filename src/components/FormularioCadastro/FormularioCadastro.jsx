import React from 'react';
import Button from "@material-ui/Button"
import TextField from "@material-ui/core/TextField"
function FormularioCadastro(){

    //toda função tem que ter um retorno
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined"/>
            <TextField id="cpf" label="CPF" variant="outlined"/>
            
            <label>Promoções</label>
            <input type="checkbox"/>

            <label>Novidades</label>
            <input type="checkbox"/>

            <Button variant="contained" color="primary"  type="submit">Cadastrar</Button>

        </form>
    );

}

//npm install @material-ui/core

export default FormularioCadastro ;