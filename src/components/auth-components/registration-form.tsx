import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PasswordComplexity from './password-complexity/password-complexity'
import PasswordValidation, { passwordValidationRules } from './password-validation/password-validation'
import Btn from '../UI/btn/btn'
import styles from './registration-form.module.scss'

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
      <form className='form' onSubmit={(e) => e.preventDefault()}>
          <div className='form__field'>
              <div className={styles['form__pass-label-wrapper']}>
                  <label className={'label'}>Password</label>
                  <button onClick={() => setPasswordShow(!passwordShow)}>show password</button>
              </div>

              <div className={styles['form__pass-input-wrapper']}>
                  <input
                      className={`text-input ${errors.password && 'text-input__on-error'} input`}
                      style={{ paddingRight: 116 }}
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
                  <div className={styles['form__pass-complexity']}>
                      <PasswordComplexity valueOfNewPassword={getValues().password?.toString()}/>
                  </div>
              </div>
              <PasswordValidation valueOfNewPassword={getValues().password?.toString()}/>

              <input
                  className={`text-input ${errors.confirmPassword && 'text-input__on-error'}`}
                  placeholder='Repeat password'
                  type={passwordShow ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    validate: (value) => value === getValues().password || 'The passwords do not match'
                  })}
              />
              {errors.confirmPassword && <div className={'form__error-msg'}>{errors.confirmPassword.message}</div>}
          </div>

          <Btn
              text={'Sign in'}
              isSubmitType={true}
              cssClass={'form__submit-btn'}
              onClick={handleSubmit(onSubmit)}
              disabled={!isDirty || !isValid}
          />
      </form>
  )
}

export default RegistrationForm
