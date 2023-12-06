import { ErrorMessage, Field, Form, Formik } from "formik";
import ARROW_LEFT from "../../assets/icons/arrow-left-pink.svg";
import "./passwordRecovery.css";
import { passwordRecoverySchema } from "../../utils/validationSchema";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import Img from "../../components/Img";
import { useState } from "react";
import EMAIL from "../../assets/icons/sms-pink.svg";
import { NavLink } from "react-router-dom";

const PasswordRecovery = ({ setPasswordRecovery }) => {
  const [resetPass, setResetPass] = useState(false);

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
        Back
      </button>
      {resetPass ? (
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
            Didn’t receive a mail?{" "}
            <NavLink to='/wow/sign-up'>Click to resend</NavLink>
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
              setResetPass(true);
            }}
            validationSchema={passwordRecoverySchema}>
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
                <Button
                  btnType='submit'
                  link={false}
                  text='Reset Password'
                  style={{
                    width: "100%",
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
        </div>
      )}
    </motion.div>
  );
};

export default PasswordRecovery;