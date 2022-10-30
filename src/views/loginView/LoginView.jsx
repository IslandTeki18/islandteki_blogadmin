import React, { useState } from "react";
import "./LoginView.scss";
import { useDispatch } from "react-redux";
import InputLabel from "../../components/inputLabel/InputLabel";
import { login } from "../../redux/actions/users.actions";

const LoginView = () => {
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  function submitHandler() {
    if (!userForm.username || !userForm.password) {
      return setIsInputEmpty(true);
    }
    dispatch(login(userForm.username, userForm.password));
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
              type="text"
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
              id="usernameInput"
              label="Password"
              type="password"
              onChange={(e) =>
                setUserForm((prev) => {
                  return {
                    ...prev,
                    username: e.target.value,
                  };
                })
              }
              value={userForm.username}
              placeholder="Password..."
              className="mb-4"
            />
            <div className="d-grid">
              <button className="btn btn-success" type="submit">
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
