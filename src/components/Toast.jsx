import { CheckCircle2, XCircle } from 'lucide-react'
import './Toast.css'

function Toast({ toast }) {
  if (!toast.visible) return null

  return (
    <div className={`toast toast--${toast.type}`}>
      {toast.type === 'error' ? <XCircle size={20} /> : <CheckCircle2 size={20} />}
      <span>{toast.message}</span>
    </div>
  )
}

export default Toast
