import { ErrorMessage, Field, Form, Formik } from "formik";
import "./style.css";
import Img from "../../components/Img";
import Button from "../../components/Button/Button";
import UPLOAD from "../../assets/icons/upload-white.svg";
import { contactSchema } from "../../utils/validationSchema";
import Footer from "../../components/Footer/Footer";
import ARROW from "../../assets/icons/arrow-left-pink.svg";
import LOCATION from "../../assets/icons/location-white.svg";
import TIME from "../../assets/icons/time-white.svg";
import { useTranslation } from "react-i18next";

const Position = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='positionContainer container'>
        <div className='position1'>
          <div className='articleBackBtnContainer'>
            <button className='articleBackBtn'>
              <div>
                <Img src={ARROW} alt='Arrow' />
              </div>
              {t("back")}
            </button>
          </div>
          <div className='positionDescriptionTitle'>
            <p>Product Designer</p>
          </div>
          <div className='vacancyInfo'>
            <div>
              <Img src={LOCATION} alt='Location' />
              On site
            </div>
            <div>
              <Img src={TIME} alt='Time' />
              Full-time
            </div>
          </div>
          <div className='articleInfo'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
              <br />
              <br />
              <strong>Lorem Ipsum is simply dummy text</strong>
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
              <br />
              <br />
              <strong>Lorem Ipsum is simply dummy text</strong>
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
        <div className='position2'>
          <Formik
            initialValues={{
              full_name: "",
              email: "",
              phone: "",
              message: "",
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.setSubmitting(false);
            }}
            validationSchema={contactSchema}>
            {() => (
              <Form className='contactForm'>
                <p className='formTitle'>Apply for position</p>
                <div className='contactFormGroup'>
                  <label htmlFor='full_name'>Full Name *</label>
                  <div className='contactFormGroupInput'>
                    <Field
                      type='text'
                      name='full_name'
                      placeholder='Enter your full name'
                    />
                  </div>
                  <ErrorMessage
                    name='full_name'
                    component='p'
                    className='authError'
                  />
                </div>
                <div className='contactFormGroup2ndLayout'>
                  <div className='contactFormGroup'>
                    <label htmlFor='email'>Email Address *</label>
                    <div className='contactFormGroupInput'>
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
                  <div className='contactFormGroup'>
                    <label htmlFor='phone'>Phone Number *</label>
                    <div className='contactFormGroupInput'>
                      <Field
                        type='text'
                        name='phone'
                        placeholder='Enter your phone number'
                      />
                    </div>
                    <ErrorMessage
                      name='phone'
                      component='p'
                      className='authError'
                    />
                  </div>
                </div>
                <div className='contactFormGroup'>
                  <label htmlFor='message'>Message</label>
                  <div className='contactFormGroupInput'>
                    <Field
                      type='text'
                      name='message'
                      placeholder='Enter your message'
                    />
                  </div>
                  <ErrorMessage
                    name='message'
                    component='p'
                    className='authError'
                  />
                </div>
                <div className='upload-btn-wrapper'>
                  <button>
                    <Img src={UPLOAD} alt='Upload' />
                    Upload
                  </button>
                  <input type='file' name='myfile' />
                </div>
                <Button
                  btnType='submit'
                  link={false}
                  text='Apply'
                  style={{
                    backgroundColor: "var(--main-color-pink)",
                    border: "none",
                    fontFamily: "Poppins-600, sans-serif",
                    fontWeight: "600",
                    borderRadius: "var(--main-border-radius)",
                    color: "var(--secondary-color-white)",
                    width: "fit-content",
                  }}
                  className='bottomHeaderRegisterBtn'
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Position;
