import { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

export default class App extends Component {
 
 render() {
    return (
      <Fragment>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}
