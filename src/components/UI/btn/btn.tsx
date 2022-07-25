import React from 'react'
import styles from './btn.module.scss'

interface Props {
    text: string,
    cssClass?: string,
    isSubmitType?: boolean;
    onClick?: () => void,
    disabled?: boolean,
}

function Btn ({ text, cssClass, isSubmitType, onClick, disabled }: Props) {
  return (
      <button
          type={isSubmitType ? 'submit' : 'button'}
          className={`${styles.btn} ${cssClass && cssClass}`}
          onClick={onClick}
          disabled={disabled}
      >
          {text}
      </button>
  )
}

Btn.defaultProps = {
  isSubmitType: false,
  disabled: false,
  onClick: () => null
}

export default Btn
