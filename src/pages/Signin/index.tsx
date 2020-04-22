import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="SVip" />

      <form>
        <h1> Faça seu Logon</h1>

        <input placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="submit" placeholder="Entrar">
          Entrar
        </button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SigIn;
