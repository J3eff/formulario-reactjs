import React, { useState, useEffect } from 'react';
import DadosUsuario from './DadosUsuario';
import DadosPessoais from './DadosPessoais';
import DadosEntrega from './DadosEntrega';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if(etapaAtual === formualrios.length-1)
            aoEnviar(dadosColetados);
    })

    const formualrios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formualrios[etapaAtual]}            
        </>
    );
}

export default FormularioCadastro;