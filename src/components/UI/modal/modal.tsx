import React, { ReactNode } from 'react'
import './modal.scss'

type Props = {
    isOpen: boolean,
    close: Function,
    children: ReactNode,
};

function Modal ({ isOpen, close, children }: Props) {
  return (
        <div className={`overlay ${isOpen && 'overlay_is-open'}`} onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal__close-btn">
                    <div onClick={() => close()}>x</div>
                 </div>
                {children}
            </div>
        </div>
  )
}

export default Modal
