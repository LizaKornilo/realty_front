import React, { ReactNode, useState } from 'react'
import WrapperOnClickOutside from '../wrapper-on-click-outside/wrapper-on-click-outside'

interface IProps{
    element: ReactNode | string;
    items: ReactNode[]
}

const Dropdown = ({ element, items }: IProps) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
      <div>
          <div onClick={() => setIsOpened(true)}>{element}</div>
          {
              !isOpened
                ? null
                : (
                    <WrapperOnClickOutside onClickOutside={() => { setIsOpened(false) }} >
                        {items.map((item, index) =>
                            <div key={index} onClick={() => setIsOpened(false)}>
                                {item}
                            </div>
                        )}
                    </WrapperOnClickOutside>
                  )
          }
      </div>
  )
}

export default Dropdown
