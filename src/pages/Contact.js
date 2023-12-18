import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactLayout from "../components/ContactLayout/ContactLayout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from "../utils/validationSchema";
import LOCATION from "../assets/icons/location-white.svg";
import EMAIL from "../assets/icons/sms-white.svg";
import TELEPHONE from "../assets/icons/telephone-ring-white.svg";
import Button from "../components/Button/Button";
import Img from "../components/Img";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import { animate, initial } from "../utils/transition";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../redux/actions/locationsActions";
import Spinner from "../components/Spinner/Spinner";
import Locations from "../components/Locations/Locations";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: LOCATION,
      title: "Address",
      description: "Address name",
    },
    {
      id: 2,
      icon: EMAIL,
      title: "Email",
      description: "email@gamail.com",
    },
    {
      id: 3,
      icon: TELEPHONE,
      title: "Phone Number",
      description: "+374 00 000 000",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  const locations = useSelector(state => state.locations);
  // const lang = "en";

  if (locations.loading && locations.locations === null)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='contactContainer'
      style={{ paddingTop: "80px" }}>
      {locations.locations?.locations && (
        <>
          <ContactLayout
            pageTitle='Contact us'
            pageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            detailsChildren={
              <>
                {contactDetails.map(detail => (
                  <div className='contactDetail' key={detail.id}>
                    <div className='contactDetailIcon'>
                      <Img src={detail.icon} alt={detail.title} />
                    </div>
                    <div className='contactDetailInfo'>
                      <p className='contactDetailInfoTitle'>{detail.title}</p>
                      <p className='contactDetailInfoDescription'>
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            }>
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
                  <div className='contactFormGroup'>
                    <label htmlFor='full_name'>Full Name</label>
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
                      <label htmlFor='email'>Email Address</label>
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
                      <label htmlFor='phone'>Phone Number</label>
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
                  <Button
                    btnType='submit'
                    link={false}
                    text='Send Message'
                    style={{
                      backgroundColor: "var(--main-color-pink)",
                      border: "none",
                      fontFamily: "Poppins-600",
                      borderRadius: "var(--main-border-radius)",
                      color: "var(--secondary-color-white)",
                      width: "fit-content",
                    }}
                    className='bottomHeaderRegisterBtn'
                  />
                </Form>
              )}
            </Formik>
          </ContactLayout>
          <ContactLayout
            pageTitle='Frequently Asked Questions'
            pageDescription='New to Fastshift and got questions? Hopefully we can answer them below!'>
            <FAQ className='contactFAQ' />
          </ContactLayout>
          <Locations locations={locations.locations?.locations} />
          <Footer />
        </>
      )}
    </motion.div>
  );
};

export default Contact;
