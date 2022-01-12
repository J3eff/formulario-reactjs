import React, { useState } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formualrios = [
        <DadosUsuario aoEnviar={proximo} />,
        <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={aoEnviar} />
    ]

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (<>{formualrios[etapaAtual]}</>);
}

export default FormularioCadastro;