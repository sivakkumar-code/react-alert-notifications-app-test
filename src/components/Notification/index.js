import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="card-container">
      <div className="icon-and-typo-container">
        <div className={`icon-container ${children[1]}`}>{children[0]}</div>
        <div className="typo-container">
          <h1 className={`heading ${children[1]}`}>{children[1]}</h1>
          <p className="description">{children[2]}</p>
        </div>
      </div>
      <div className="close-icon-container">
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
