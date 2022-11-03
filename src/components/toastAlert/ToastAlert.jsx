import Toast from "react-bootstrap/Toast";
import propTypes from "prop-types";

const ToastAlert = (props) => {
  return (
    <Toast
      show={props.show}
      onClose={props.onClose}
      delay={props.delay}
      autohide={props.autohide}
      animation={props.animation}
      bg={props.bg}
    >
      <Toast.Header>
        <strong className="me-auto">{props.header || "Hey, Listen."}</strong>
      </Toast.Header>
      <Toast.Body>{props.toastContent}</Toast.Body>
    </Toast>
  );
};

ToastAlert.defaultProps = {
  autohide: false,
  delay: 5000,
  animation: true,
  bg: "primary",
};

ToastAlert.propTypes = {
  toastContent: propTypes.elementType,
  header: propTypes.string,
  onClose: propTypes.func,
  show: propTypes.bool,
  autohide: propTypes.bool,
  delay: propTypes.number,
  animation: propTypes.bool,
  bg: propTypes.string,
};

export default ToastAlert;
