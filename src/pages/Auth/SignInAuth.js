import { ErrorMessage, Field, Form, Formik } from "formik";
import LOGO from "../../assets/logo/wow-logo.svg";
import IMG_1 from "../../assets/ui-fake-images/house-design-furnishing-1.svg";
import Img from "../../components/Img";
import Button from "../../components/Button/Button";
import GMAIL from "../../assets/icons/gmail.svg";
import FACEBOOK from "../../assets/icons/facebook.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import PasswordRecovery from "./PasswordRecovery";
import { motion } from "framer-motion";
import { signInSchema } from "../../utils/validationSchema";
import { animate, initial } from "../../utils/transition";
import Checkbox from "../../components/Checkbox/Checkbox";
import apiService from "../../services/apiService";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const Auth = ({ auth }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleEye = () => {
    setShowPassword(!showPassword);
  };

  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [hasNavigated, setHasNavigated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async values => {
    setLoading(true);
    setError(null);

    await apiService.post("login", values, {}, ({ loading, error, data }) => {
      setLoading(loading);
      setError(error);
      if (!error && data && data.access_token && data.user && !hasNavigated) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setHasNavigated(true);
        !hasNavigated && navigate(`/account/control-panel`);
        dispatch(login());
      }
      setResponseData(data);
    });
  };

  return (
    <motion.div initial={initial} animate={animate} className='authContainer'>
      <div className='authFormContainer container'>
        <NavLink to='/' className='authLogo'>
          <Img src={LOGO} alt='Wow Logo' className='authLogoImg' />
        </NavLink>
        {passwordRecovery ? (
          <PasswordRecovery setPasswordRecovery={setPasswordRecovery} />
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}>
            <div className='authGreeting'>
              <p className='authGreetingTitle'>
                {auth === "sign-up"
                  ? "Hey, register to our website"
                  : "Hey, sign in to your account "}
              </p>
              <p className='authGreetingDescription'>
                Welcome to Wow transforming furniture
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
                handleSignIn(values);
              }}
              validationSchema={signInSchema}>
              {() => (
                <Form className='authForm'>
                  <div className='authFormGroup'>
                    <label htmlFor='email'>Email address</label>
                    <div className='authFormGroupInput'>
                      <Field
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                      />
                    </div>
                    <ErrorMessage
                      name='email'
                      component='p'
                      className='authError'
                    />
                  </div>
                  <div className='authFormGroup'>
                    <label htmlFor='password'>Password</label>
                    <div className='authFormGroupInput'>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name='password'
                        placeholder='Enter your password'
                      />
                      <div
                        className={`eyeContainer ${
                          showPassword ? "eyeOpen" : "eyeClose"
                        }`}
                        onClick={toggleEye}>
                        <span className='icon-eye middle-right'>
                          <svg
                            viewBox='-20 -200 320 400'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'>
                            <g id='eye' strokeWidth='30' fill='none'>
                              <g id='eye-lashes' stroke='currentColor'>
                                <line x1='140' x2='140' y1='90' y2='180' />
                                <line x1='70' x2='10' y1='60' y2='140' />
                                <line x1='210' x2='270' y1='60' y2='140' />
                              </g>
                              <path
                                id='eye-bottom'
                                d='m0,0q140,190 280,0'
                                stroke='currentColor'
                              />
                              <path
                                id='eye-top'
                                d='m0,0q140,190 280,0'
                                stroke='currentColor'
                              />
                              <circle
                                id='eye-pupil'
                                cx='140'
                                cy='0'
                                r='50'
                                fill='currentColor'
                                stroke='none'
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <ErrorMessage
                      name='password'
                      component='p'
                      className='authError'
                    />
                  </div>
                  <div className='authHub'>
                    <Checkbox
                      text='Remember me'
                      className='rememberMeHandlerTitle'
                    />
                    <div
                      className='passwordRecovery'
                      onClick={() => setPasswordRecovery(true)}>
                      <p className='passwordRecoveryTitle'>Forget password?</p>
                    </div>
                  </div>
                  <Button
                    btnType='submit'
                    link={false}
                    text={
                      loading ? <Spinner color='#fff' size={18} /> : "Sign In"
                    }
                    disabled={loading}
                    style={{
                      backgroundColor: "var(--main-color-pink)",
                      border: "none",
                      fontFamily: "Poppins-600",
                      borderRadius: "var(--main-border-radius)",
                      color: "var(--secondary-color-white)",
                    }}
                    className='bottomHeaderRegisterBtn'
                  />
                </Form>
              )}
            </Formik>
            <div className='authCredentials'>
              {auth === "sign-up" ? (
                <p className='authCredentialsGreetings'>
                  Have an account? <NavLink to='/sign-in'>Log In</NavLink>
                </p>
              ) : (
                <p className='authCredentialsGreetings'>
                  Don’t have an account?{" "}
                  <NavLink to='/sign-up'>Register</NavLink>
                </p>
              )}
              <div className='authCredentialsOr'>
                <div className='authCredentialsLine1'></div>
                <p>Or</p>
                <div className='authCredentialsLine2'></div>
              </div>
              <div className='authCredentialsBtns'>
                <button>
                  <img src={GMAIL} alt='Gmail' />
                  Google
                </button>
                <button>
                  <img src={FACEBOOK} alt='Facebook' />
                  Facebook
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div
        className='authSecondPart'
        style={{ backgroundImage: `url(${IMG_1})` }}></div>
      <Modal
        title=''
        open={error?.response?.data}
        onClose={() => setError(null)}>
        <p className='authResponseMessage'>{error?.response?.data.error}</p>
      </Modal>
    </motion.div>
  );
};

export default Auth;
