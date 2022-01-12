import React, { useState } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario />
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
            case 2:
                return <DadosEntrega />
            default:
                return <Typography>Erro ao selecionar formulario</Typography>
        }
    }

    return (
        <>
            { formularioAtual(etapaAtual) }
            {/* <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} /> */}
            {/* <DadosUsuario /> */}
            {/* <DadosEntrega /> */}
        </>
    );
}


export default FormularioCadastro;