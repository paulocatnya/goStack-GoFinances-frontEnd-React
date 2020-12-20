import React, { useCallback, useRef, useContext } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiClock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

import { FormHandles } from '@unform/core';
import Logo from '../../assets/logo.svg';


import getValidationErrors from '../../utils/getValidationErrors'
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email valido.'),
        password: Yup.string().min(6, 'Senha minima 6 caracteres'),
      });


      await schema.validate(data, { abortEarly: false });

    } catch (err) {

      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)

    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarber" />
          <Form
            ref={formRef}
            // initialData={{ name: 'Josefo Oliveira ...' }}
            onSubmit={handleSubmit}
          >
            <h1>Faça seu Cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiClock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
          Voltar para logon
        </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
