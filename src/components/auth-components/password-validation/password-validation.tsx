import React from 'react'
import styles from './password-validation.module.scss'

const atLeastOneLowerCaseRegex = /^(?=.*?[a-z])/
const atLeastOneUpperCaseRegex = /^(?=.*?[A-Z])/
const atLeastOneNumberRegex = /\d/
// eslint-disable-next-line
const atLeastOneSpecialCharacterRegex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

export const passwordValidationRules = {
  minLength: (password: string) => password?.length >= 8,
  minLowerCase: (password: string) => !!atLeastOneLowerCaseRegex.test(password),
  minUpperCase: (password: string) => !!atLeastOneUpperCaseRegex.test(password),
  minNumbers: (password: string) => !!atLeastOneNumberRegex.test(password),
  minSpecSymbols: (password: string) => !!atLeastOneSpecialCharacterRegex.test(password)
}

interface IProps {
  valueOfNewPassword: string
}

const PasswordValidation = ({ valueOfNewPassword }: IProps) => {
  const showStatus = !!valueOfNewPassword

  return (
      <ul className={styles['unstyled-ul']}>
          <RuleText
              text={'At least 8 characters'}
              showStatus={showStatus}
              isValid={passwordValidationRules.minLength(valueOfNewPassword)}
          />
          <RuleText
              text={'At least 1 lowercase english character'}
              showStatus={showStatus}
              isValid={passwordValidationRules.minLowerCase(valueOfNewPassword)}
          />
          <RuleText
              text={'At least 1 uppercase english character'}
              showStatus={showStatus}
              isValid={passwordValidationRules.minUpperCase(valueOfNewPassword)}
          />
          <RuleText
              text={'At least 1 number'}
              showStatus={showStatus}
              isValid={passwordValidationRules.minNumbers(valueOfNewPassword)}
          />
          <RuleText
              text={'At least 1 special symbol'}
              showStatus={showStatus}
              isValid={passwordValidationRules.minSpecSymbols(valueOfNewPassword)}
          />
      </ul>
  )
}

export default PasswordValidation

interface IPropsRuleText {
    showStatus: boolean,
    isValid: boolean,
    text: string
}

const RuleText = ({ showStatus, isValid, text }: IPropsRuleText) => {
  return (
      <li
        className={`${styles['rule-text']}
            ${!showStatus
            ? styles['rule-text_state_default']
            : isValid
                ? styles['rule-text_state_valid']
                : styles['rule-text_state_invalid']}`}
      >
          {text}
      </li>
  )
}
