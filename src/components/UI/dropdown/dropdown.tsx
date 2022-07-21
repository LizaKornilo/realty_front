import React, { ReactNode, useState } from 'react'
import WrapperOnClickOutside from '../wrapper-on-click-outside/wrapper-on-click-outside'
import styles from './dropdown.module.scss'

interface IProps{
    element: ReactNode | string;
    items: ReactNode[]
}

const Dropdown = ({ element, items }: IProps) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
      <div className={styles.dropdown}>
          <div onClick={() => setIsOpened(true)}>{element}</div>
          {
              !isOpened
                ? null
                : (
                    <WrapperOnClickOutside onClickOutside={() => { setIsOpened(false) }} >
                        <div className={styles.dropdown__window}>
                            {items.map((item, index) =>
                                <div
                                    className={styles.dropdown__item}
                                    key={index}
                                    onClick={() => setIsOpened(false)}>
                                    {item}
                                </div>
                            )}
                        </div>
                    </WrapperOnClickOutside>
                  )
          }
      </div>
  )
}

export default Dropdown
