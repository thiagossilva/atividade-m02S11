import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  RegisterPageContainer,
  RegisterPageSection,
  RegisterPageSectionCard
} from './styles'
import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useUserRegister from '../../hooks/useUserRegister'

import './UserRegisterPage.css'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório')
})

function UserRegisterPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { isSubmitting, registerUser } = useUserRegister()

  const onSubmit = (data) => {
    registerUser(data)
  }

  return (
    <RegisterPageContainer>
      <RegisterPageSection>
        <Card>
          <RegisterPageSectionCard>
            <h1 className="register-page-section-title">Cadastrar Usuário</h1>

            <form
              className="register-page-section-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup
                    labelText="Nome"
                    placeholder="Seu nome"
                    helperText={errors?.name?.message}
                    {...register('name')}
                  />
                  <InputGroup
                    labelText="E-mail"
                    placeholder="Seu e-mail"
                    helperText={errors?.email?.message}
                    {...register('email')}
                  />
                  <InputGroup
                    labelText="Senha"
                    placeholder="Sua senha"
                    helperText={errors?.email?.message}
                    type="password"
                    {...register('password')}
                  />
                </div>
              </div>

              <div className="register-page-section-form-footer">
                <div>
                  <Button type="submit" disabled={isSubmitting}>
                    Cadastrar
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANT.PRIMARY_LINK}
                    onClick={() => navigate('/login')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </RegisterPageSectionCard>
        </Card>
      </RegisterPageSection>
    </RegisterPageContainer>
  )
}

export default UserRegisterPage
