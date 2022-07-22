import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import colors from '../../../styles/colors.module.scss'
import styles from './password-complexity.module.scss'

import 'react-circular-progressbar/dist/styles.css'
const zxcvbn = require('zxcvbn')

const getText = (score: number): string => {
  switch (score) {
    case 0: return 'Very weak'
    case 1: return 'Weak'
    case 2: return 'Fair'
    case 3: return 'Strong'
    case 4: return 'Very strong'
    default: return ''
  }
}

const getColor = (score: number): string => {
  switch (score) {
    case 0: return colors.red
    case 1: return colors.red
    case 2: return colors.orange
    case 3: return colors.yellow
    case 4: return colors.green
    default: return colors.red
  }
}

interface IProps {
    valueOfNewPassword: string
}

const PasswordComplexity = ({ valueOfNewPassword }: IProps) => {
  const testResult = zxcvbn(valueOfNewPassword)

  const text = getText(testResult.score)
  const color = getColor(testResult.score)
  const percentage = (testResult.score * 100) / 4

  return (
      <div className={styles['password-complexity']}>
          <div className={styles['password-complexity__text']}>{text}</div>
          <div className={styles['password-complexity__progressbar']}>
              <CircularProgressbar value={percentage}
                                   styles={buildStyles({
                                     pathColor: color
                                   })}
              />
          </div>
      </div>
  )
}

export default PasswordComplexity
