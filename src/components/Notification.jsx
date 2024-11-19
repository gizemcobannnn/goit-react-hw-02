import PropTypes from "prop-types";
import Styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={Styles.notification}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
