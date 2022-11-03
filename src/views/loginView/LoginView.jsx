import React, { useEffect, useState } from "react";
import "./LoginView.scss";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "../../components/inputLabel/InputLabel";
import { login } from "../../redux/actions/users.actions";
import ToastAlert from "../../components/toastAlert/ToastAlert";
import ToastContainer from "react-bootstrap/ToastContainer";

const LoginView = ({ history }) => {
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }

    function isFormFilledOut() {
      if (userForm.username !== "" && userForm.password !== "") {
        return setIsFormValid(true);
      }
      return setIsFormValid(false);
    }
    isFormFilledOut();
  }, [userForm, history, userInfo, error]);
  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  function submitHandler(e) {
    e.preventDefault();
    try {
      dispatch(login(userForm.username, userForm.password));
      setUserForm({ username: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="dkLoginView bg-dark">
      <div className="card bg-light text-dark">
        <div className="card-body">
          <h3 className="text-center">Island Teki Blog Admin</h3>
          <form onSubmit={submitHandler}>
            <InputLabel
              id="usernameInput"
              label="Username"
              inputType="text"
              onChange={(e) =>
                setUserForm((prev) => {
                  return {
                    ...prev,
                    username: e.target.value,
                  };
                })
              }
              value={userForm.username}
              placeholder="Username..."
              className="mb-4"
            />
            <InputLabel
              id="passwordInput"
              label="Password"
              inputType="password"
              onChange={(e) =>
                setUserForm((prev) => {
                  return {
                    ...prev,
                    password: e.target.value,
                  };
                })
              }
              value={userForm.password}
              placeholder="Password..."
              className="mb-4"
            />
            <div className="d-grid">
              <button
                className="btn btn-success"
                type="submit"
                disabled={!isFormValid}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer containerPosition position={"top-center"}>
        <ToastAlert
          show={showError}
          onClose={() => setShowError((prev) => !prev)}
          toastContent={<div className="text-white text-center">{error}</div>}
          bg="danger"
          header="Uh Oh... Something went wrong."
        />
      </ToastContainer>
    </div>
  );
};

export default LoginView;
