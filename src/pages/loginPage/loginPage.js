import { ReactComponent as QencodeImg } from "../../img/qencode.svg";
import { ReactComponent as GoogleImg } from "../../img/google.svg";
import { ReactComponent as GitImg } from "../../img/git.svg";
import { LoginContainer } from "./liginPage.styled";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  //   const refresh_token = useSelector((state) => state.auth.refresh_token);
  //   console.log("refresh_token", refresh_token);
  //   const token_expire = useSelector((state) => state.auth.token_expire);
  //   console.log("token_expire", token_expire);
  //   const access_token = useSelector((state) => state.auth.access_token);
  //   console.log("access_token", access_token);

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      dispatch(authOperations.logIn(values)).then((response) => {
        response.payload.token_expire && navigate("/");
      });
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const getHidePassword = () => {
    return (
      <div
        className={showPassword ? "HidePassword" : "ShowPassword"}
        onClick={handleTogglePassword}
      />
    );
  };
  return (
    <LoginContainer>
      <div className="ContentContainer">
        <QencodeImg />
        <p className="Text">Log in to your account</p>
        <ul className="LinkList">
          <li>
            <a className="Link" href="https://google.com">
              <GoogleImg /> Google
            </a>
          </li>
          <li>
            <a className="Link" href="https://github.com">
              <GitImg /> Github
            </a>
          </li>
        </ul>

        <ul className="UnderliningList">
          <li className="Underlining"></li>
          <li className="UnderliningText">OR</li>
          <li className="Underlining"></li>
        </ul>

        <form className="Form">
          <input
            id="logInEmail"
            name="email"
            className="Input"
            type="email"
            placeholder="Work email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <div className="DivInput" id="password">
            <input
              id="logInPassword"
              name="password"
              placeholder="Password"
              className="Input"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {values.password && getHidePassword()}
          </div>
          <p className="FogotPasswordButton">Forgot your password?</p>

          <button className="SubmitButton" onClick={handleSubmit}>
            Log in to Qencode
          </button>
        </form>

        <p className="QencodeText">
          Is your company new to Qencode?
          <span className="SingUpButton">Sign up</span>
        </p>
      </div>
    </LoginContainer>
  );
}
