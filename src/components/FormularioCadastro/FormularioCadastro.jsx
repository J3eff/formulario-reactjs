import React from 'react';
import Button  from '@material-ui/core/Button';

function FormularioCadastro() {
     return (
        <form>
            <label>Nome</label>
            <input type="text"></input>

            <label>Sobrenome</label>
            <input type="text"></input>

            <label>CPF</label>
            <input type="text"></input>


            <label>Promoções</label>
            <input type="checkbox" />

            <label>Novidades</label>
            <input type="checkbox" />

            <Button variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;