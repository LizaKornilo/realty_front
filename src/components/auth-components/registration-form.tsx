import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PasswordComplexity from './password-complexity/password-complexity'
import PasswordValidation, { passwordValidationRules } from './password-validation/password-validation'

const RegistrationForm = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false)

  const DefaultValuesForForm = {
    registration: {
      password: '',
      confirmPassword: ''
    }
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch
  } = useForm({
    defaultValues: DefaultValuesForForm.registration,
    mode: 'onChange'
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const watchAllFields = watch()

  const onSubmit = async (data: any) => { // todo write types
    alert(JSON.stringify(data))
  }

  return (
      <form onSubmit={(e) => e.preventDefault()}>
          <div>
              <label>Password</label>
              <button onClick={() => setPasswordShow(!passwordShow)}>show password</button>
          </div>

          <div style={{ position: 'relative' }}>
              <input
              style={{ width: '100%', height: 40, padding: 15 }}
              placeholder='Create password'
              type={passwordShow ? 'text' : 'password'}
              {...register('password', {
                validate: {
                  minLength: value => passwordValidationRules.minLength(value),
                  atLeastOneLowerCase: value => passwordValidationRules.minLowerCase(value),
                  atLeastOneUpperCase: value => passwordValidationRules.minUpperCase(value),
                  atLeastOneNumber: value => passwordValidationRules.minNumbers(value),
                  atLeastOneSpecialCharacter: value => passwordValidationRules.minSpecSymbols(value)
                }
              })}
          />
              <div style={{ position: 'absolute', right: 10, top: 0, height: 40, display: 'flex', alignItems: 'center' }}>
                  <PasswordComplexity valueOfNewPassword={getValues().password?.toString()}/>
              </div>
          </div>
          <PasswordValidation valueOfNewPassword={getValues().password?.toString()}/>
          <input
              placeholder='Repeat password'
              type={passwordShow ? 'text' : 'password'}
              {...register('confirmPassword', {
                validate: (value) => value === getValues().password || 'The passwords do not match'
              })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <input
              type='submit' onClick={handleSubmit(onSubmit)}
              disabled={!isDirty || !isValid}
          />
      </form>
  )
}

export default RegistrationForm
