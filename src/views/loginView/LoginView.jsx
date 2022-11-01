import React, { useEffect, useState } from "react";
import "./LoginView.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "../../components/inputLabel/InputLabel";
import { login } from "../../redux/actions/users.actions";

const LoginView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    function isFormFilledOut() {
      if (userForm.username !== "" && userForm.password !== "") {
        return setIsFormValid(true);
      }
      return setIsFormValid(false);
    }
    isFormFilledOut();
  }, [userForm]);


  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(userForm.username, userForm.password));
    setUserForm({ username: "", password: "" });
    history.push("/dashboard");
  }
  return (
    <div className="dkLoginView bg-dark">
      <div className="card bg-light text-dark">
        <div className="card-body">
          <h3 className="text-center">Island Teki Blog Login</h3>
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
    </div>
  );
};

export default LoginView;
