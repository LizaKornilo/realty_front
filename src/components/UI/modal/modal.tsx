import React, { ReactNode } from 'react'
import styles from './modal.module.scss'
import SvgSelector, { svgIds } from '../../svg-selector'

type Props = {
    isOpen: boolean,
    close: Function,
    children: ReactNode,
};

function Modal ({ isOpen, close, children }: Props) {
  return (
      <div className={`${styles.overlay} ${isOpen && styles['overlay_is-open']}`} onClick={() => close()}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <SvgSelector id={svgIds.CLOSE} onClick={() => close()} classNames={styles['modal__close-btn']} />
              {children}
          </div>
      </div>
  )
}

export default Modal
