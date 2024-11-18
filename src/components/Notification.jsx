import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#ffcccb",
        color: "#333",
        borderRadius: "5px",
        textAlign: "center",
        marginTop: "20px",
        fontSize: "16px",
      }}
    >
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
