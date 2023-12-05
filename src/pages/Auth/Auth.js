import { ErrorMessage, Field, Form, Formik } from "formik";
import LOGO from "../../assets/logo/wow-logo.svg";
import IMG_1 from "../../assets/ui-fake-images/house-design-furnishing-1.svg";
import Img from "../../components/Img";
import { signUpSchema } from "../../utils/validationSchema";
import "./style.css";
import Button from "../../components/Button/Button";
import GMAIL from "../../assets/icons/gmail.svg";
import FACEBOOK from "../../assets/icons/facebook.svg";
import { NavLink } from "react-router-dom";

const Auth = ({ auth }) => {
  return (
    <div className='authContainer'>
      <div className='authFormContainer container'>
        <div className='authLogo'>
          <Img src={LOGO} alt='Wow Logo' className='authLogoImg' />
        </div>
        <div className='authGreeting'>
          <p className='authGreetingTitle'>Hey, register to our website</p>
          <p className='authGreetingDescription'>
            Welcome to Wow transforming furniture
          </p>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
          validationSchema={signUpSchema}>
          {() => (
            <Form className='authForm'>
              <div className='authFormGroup'>
                <label htmlFor='email'>Email address</label>
                <Field
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                />
                <ErrorMessage
                  name='email'
                  component='p'
                  className='authError'
                />
              </div>
              <div className='authFormGroup'>
                <label htmlFor='password'>Password</label>
                <Field
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                />
                <ErrorMessage
                  name='password'
                  component='p'
                  className='authError'
                />
              </div>
              <div className='authFormGroup'>
                <label htmlFor='password_confirmation'>Comfirm password</label>
                <Field
                  type='password'
                  name='password_confirmation'
                  placeholder='Enter your email address'
                />
                <ErrorMessage
                  name='password_confirmation'
                  component='p'
                  className='authError'
                />
              </div>
              <Button
                link={false}
                text='Sign Up'
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
          <p className='authCredentialsGreetings'>
            Have an account? <NavLink to=''>Log In</NavLink>
          </p>
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
      </div>
      <div
        className='authSecondPart'
        style={{ backgroundImage: `url(${IMG_1})` }}></div>
    </div>
  );
};

export default Auth;
