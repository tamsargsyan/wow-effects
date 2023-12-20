import { ErrorMessage, Field, Form, Formik } from "formik";
import LOGO from "../../assets/logo/wow-logo.svg";
import IMG_1 from "../../assets/ui-fake-images/house-design-furnishing-1.svg";
import Img from "../../components/Img";
import Button from "../../components/Button/Button";
import GMAIL from "../../assets/icons/gmail.svg";
import FACEBOOK from "../../assets/icons/facebook.svg";
import {
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import PasswordRecovery from "./PasswordRecovery";
import { motion } from "framer-motion";
import {
  passwordRecoverySchema,
  resetPassSchema,
  signInSchema,
} from "../../utils/validationSchema";
import { animate, initial } from "../../utils/transition";
import Checkbox from "../../components/Checkbox/Checkbox";
import apiService from "../../services/apiService";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import ARROW_LEFT from "../../assets/icons/arrow-left-pink.svg";

const ResetPassword = () => {
  const [resetPass, setResetPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    password1: false,
    password2: false,
  });

  const toggleEye = fieldName => {
    setShowPasswords(prevState => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [checkCodeLoading, setCheckCodeLoading] = useState(false);
  const [checkCodeError, setCheckCodeError] = useState(null);
  const [checkCodeResponseData, setCheckCodeResponseData] = useState(null);

  const checkCode = async () => {
    setCheckCodeLoading(true);
    setCheckCodeError(null);

    await apiService.post(
      "password/code/check",
      {
        code,
      },
      {},
      ({ loading, error, data }) => {
        setCheckCodeLoading(loading);
        setCheckCodeError(error);

        setCheckCodeResponseData(data);
      }
    );
  };

  useEffect(() => {
    checkCode();
  }, []);

  const [resetPassLoading, setResetPassLoading] = useState(false);
  const [resetPassError, setResetPassError] = useState(null);
  const [resetPassResponseData, setResetPassResponseData] = useState(null);

  const handleResetPass = async values => {
    setResetPassLoading(true);
    setResetPassError(null);

    await apiService.post(
      "password/reset",
      {
        ...values,
        code,
      },
      {},
      ({ loading, error, data }) => {
        setResetPassLoading(loading);
        setResetPassError(error);
        setResetPassResponseData(data);
      }
    );
  };

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  return (
    <motion.div initial={initial} animate={animate} className='authContainer'>
      <div className='authFormContainer container'>
        <NavLink to='/' className='authLogo'>
          <Img src={LOGO} alt='Wow Logo' className='authLogoImg' />
        </NavLink>
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          className='resetPasswordContainer'>
          <button
            className='passwordRecoveryBackBtn'
            // onClick={() => setPasswordRecovery(false)}
          >
            <Img src={ARROW_LEFT} alt='Arrow Left' />
            Back
          </button>
          <div className='passwordRecoveryGreeting'>
            <p className='authGreetingTitle'>Set new password</p>
            <p className='authGreetingDescription'>
              Your new password must be different to previous used passwords
            </p>
          </div>
          <Formik
            initialValues={{
              password: "",
              password_confirmation: "",
            }}
            onSubmit={(values, actions) => {
              checkCodeResponseData.message === "The code is valid" &&
                handleResetPass(values);
            }}
            validationSchema={resetPassSchema}>
            {() => (
              <Form className='authForm'>
                <div className='authFormGroup'>
                  <label htmlFor='password'>Password</label>
                  <div className='authFormGroupInput'>
                    <Field
                      type={showPasswords.password1 ? "text" : "password"}
                      name='password'
                      placeholder='Enter your password'
                    />
                    <div
                      className={`eyeContainer ${
                        showPasswords.password1 ? "eyeOpen" : "eyeClose"
                      }`}
                      onClick={() => toggleEye("password1")}>
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
                <div className='authFormGroup'>
                  <label htmlFor='password_confirmation'>
                    Comfirm password
                  </label>
                  <div className='authFormGroupInput'>
                    <Field
                      type={showPasswords.password2 ? "text" : "password"}
                      name='password_confirmation'
                      placeholder='Enter your email address'
                    />
                    <div
                      className={`eyeContainer ${
                        showPasswords.password2 ? "eyeOpen" : "eyeClose"
                      }`}
                      onClick={() => toggleEye("password2")}>
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
                    name='password_confirmation'
                    component='p'
                    className='authError'
                  />
                </div>
                <Button
                  btnType='submit'
                  link={false}
                  text={
                    resetPassLoading ? (
                      <Spinner color='#fff' size={18} />
                    ) : (
                      "Reset Password"
                    )
                  }
                  disabled={resetPassLoading}
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
        </motion.div>
      </div>
      <div
        className='authSecondPart'
        style={{ backgroundImage: `url(${IMG_1})` }}></div>
      <Modal
        title=''
        open={resetPassResponseData?.message}
        onClose={() => {
          setResetPassResponseData(null);
          resetPassResponseData.message ===
            "password has been successfully reset" && navigate("/sign-in");
        }}>
        <p className='authResponseMessage'>{resetPassResponseData?.message}</p>
      </Modal>
    </motion.div>
  );
};

export default ResetPassword;
