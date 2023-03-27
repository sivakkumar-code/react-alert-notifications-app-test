import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <div className="main-container">
      <h1 className="main-heading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle />
        {`success`}
        {`You can access all the files in the folder`}
      </Notification>
      <Notification>
        <RiErrorWarningFill />
        {`error`}
        {`Sorry, you are not authorized to have access to delete the file`}
      </Notification>
      <Notification>
        <MdWarning />
        {`warning`}
        {`Viewers of this file can see comments and suggestions`}
      </Notification>
      <Notification>
        <MdInfo />
        {`info`}
        {`Anyone on the internet can view these files`}
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
