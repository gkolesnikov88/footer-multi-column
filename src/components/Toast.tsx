import React from 'react'
import "./_toast.css"

type ToastType = {
    header: string;
    text: string;
}

const Toast: React.FC<ToastType> = ({header, text}) => {

  return (
    <div className='toast'>
        <div className={`toast__content ${header === 'Success' ? "toast__content--success": "toast__content--error"}`}>
            <div className="toast__header">{header}</div>
            <p className="toast__info">{text}</p>
        </div>
    </div>
  )
}

export default Toast