import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="SVip" />

      <form>
        <h1> Faça seu Logon</h1>

        <Input name="email" icon={FiMail} placeholder="e-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="senha"
        />
        <Button type="submit" placeholder="Entrar">
          Entrar
        </Button>
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
