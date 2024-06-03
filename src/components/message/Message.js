import './Message.scss';

export const Message = (props) => {
  const {msg} = props
  return (
    <div className="success">
    <div className="success__icon">
     ✅
    </div>
    <div className="success__title">{msg}</div>
</div>
  )
}
