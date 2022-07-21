import React, { ReactNode, useEffect, useRef } from 'react'

interface IProps {
    onClickOutside: () => void,
    children: ReactNode
}

const WrapperOnClickOutside = ({ onClickOutside, children }: IProps) => {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])

  return (
      <div ref={ref}>
          {children}
      </div>
  )
}

export default WrapperOnClickOutside
