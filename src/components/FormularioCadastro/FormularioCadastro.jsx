import React, { useState } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';



function FormularioCadastro({ aoEnviar, validarCPF }) {
    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            <DadosUsuario />
            <DadosEntrega />
        </>
    );
}

export default FormularioCadastro;