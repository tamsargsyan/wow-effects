import { ErrorMessage, Field, Form, Formik } from "formik";
import ARROW_LEFT from "../../assets/icons/arrow-left-pink.svg";
import "./passwordRecovery.css";
import ValidationSchema from "../../utils/ValidationSchema";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import Img from "../../components/Img";
import { useState } from "react";
import EMAIL from "../../assets/icons/sms-bg-white.svg";
import apiService from "../../services/apiService";
import Spinner from "../../components/Spinner/Spinner";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const PasswordRecovery = ({ setPasswordRecovery }) => {
  const { t } = useTranslation();
  const lang = Cookies.get("i18next") || "en";
  const [resetPass, setResetPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [hasNavigated, setHasNavigated] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleResetPassword = async values => {
    setLoading(true);
    setError(null);

    await apiService.post(
      "password/email",
      {
        ...values,
        lang,
      },
      {},
      ({ loading, error, data }) => {
        setLoading(loading);
        setError(error);

        setResponseData(data);
      }
    );
  };

  const { passwordRecoverySchema } = ValidationSchema();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className='passwordRecoveryContainer'>
      <button
        className='passwordRecoveryBackBtn'
        onClick={() => setPasswordRecovery(false)}>
        <Img src={ARROW_LEFT} alt='Arrow Left' />
        {t("back")}
      </button>
      {responseData?.message === "We have emailed your password reset link!" ? (
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}>
          <div className='passwordRecoveryGreeting resetPassGreeting'>
            <Img src={EMAIL} alt='Email' className='greetingIcon' />
            <div>
              <p className='authGreetingTitle'>Forgot password?</p>
              <p className='authGreetingDescription'>
                No worries, we will send you reset instruction
              </p>
            </div>
          </div>
          <p className='authCredentialsGreetings'>
            Didn’t receive a mail? <button>Click to resend</button>
          </p>
        </motion.div>
      ) : (
        <div>
          <div className='passwordRecoveryGreeting'>
            <p className='authGreetingTitle'>Forgot password?</p>
            <p className='authGreetingDescription'>
              No worries, we will send you reset instruction
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
              // setResetPass(true);
              handleResetPassword(values);
            }}
            validationSchema={passwordRecoverySchema}>
            {() => (
              <Form className='authForm'>
                <div className='authFormGroup'>
                  <label htmlFor='email'>{t("email_address")}</label>
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
                <Button
                  btnType='submit'
                  link={false}
                  text={
                    loading ? (
                      <Spinner color='#fff' size={18} />
                    ) : (
                      "Reset Password"
                    )
                  }
                  disabled={loading}
                  style={{
                    width: "100%",
                    backgroundColor: "var(--main-color-pink)",
                    border: "none",
                    fontFamily: "Poppins-600, sans-serif",
                    fontWeight: "600",
                    borderRadius: "var(--main-border-radius)",
                    color: "var(--secondary-color-white)",
                  }}
                  className='bottomHeaderRegisterBtn'
                />
              </Form>
            )}
          </Formik>
        </div>
      )}
    </motion.div>
  );
};

export default PasswordRecovery;
