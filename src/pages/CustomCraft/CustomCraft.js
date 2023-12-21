import { motion } from "framer-motion";
import "./style.css";
import PagesTitle from "../../components/Title/PagesTitle";
import { animate, initial } from "../../utils/transition";
import Img from "../../components/Img";
import ABOUT_US_PAGE_1 from "../../assets/ui-fake-images/about-us-page-1.jpg";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../components/Portfolio/Portfolio";
import { useEffect } from "react";
import { fetchHome } from "../../redux/actions/homeActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import COMPASS from "../../assets/icons/map-locations-compass-white.svg";
import Button from "../../components/Button/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ValidationSchema from "../../utils/ValidationSchema";
import UPLOAD from "../../assets/icons/upload-white.svg";

const InteriorDesign = () => {
  const dispatch = useDispatch();

  const compass = [
    {
      id: 1,
      title: "Lorem Ipsum",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Package 1",
      price: "$0.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
    },
    {
      id: 2,
      title: "Package 1",
      price: "$0.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
    },
    {
      id: 3,
      title: "Package 1",
      price: "$0.00",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.",
    },
  ];

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  const home = useSelector(state => state.home);

  const { contactSchema } = ValidationSchema();

  if (home.loading && home.home === null)
    return (
      <div className='spinnerContainer'>
        <Spinner />
      </div>
    );

  return (
    <motion.div
      initial={initial}
      animate={animate}
      className='aboutUsContainer'>
      {home.home && (
        <>
          <PagesTitle
            title='Custom furniture production'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <Img
            src={ABOUT_US_PAGE_1}
            alt='Drawing'
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
          <div className='interiorDesignWorkingProcessContainer'>
            <p className='interiorDesignWorkingTitle1'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p className='interiorDesignWorkingTitle2'>
              Custom furniture production working process
            </p>
            <div className='interiorDesignWorkingProcessMapContainer'>
              <div className='workingProcessLine'></div>
              {compass.map((cmp, i) => (
                <div className='interiorDesignWorkingProcessMap' key={i}>
                  <div className='compassImgWrapper'>
                    <Img src={COMPASS} alt='Compass' />
                  </div>
                  <p className='workingProcessMapTitle'>{cmp.title}</p>
                  <p className='workingProcessMapDesc'>{cmp.desc}</p>
                </div>
              ))}
            </div>
            <div className='packages'>
              {packages.map((pckg, i) => (
                <div className='package' key={i}>
                  <p className='packageTitle'>{pckg.title}</p>
                  <p className='packagePrice'>{pckg.price}</p>
                  <p className='packageDesc'>{pckg.desc}</p>
                  <Button
                    text='Contact Us'
                    className='packageBtn'
                    style={{
                      borderRadius: "16px",
                      color: "#fff",
                      background: "#AF4B85",
                      textDecoration: "none",
                      display: "block",
                      width: "100%",
                      marginTop: "30px",
                      textAlign: "center",
                    }}
                    link={true}
                  />{" "}
                </div>
              ))}
            </div>
            <div className='interiorDesignContactUsContainer'>
              <div className='interorDesignContactUsTitleContainer'>
                <p className='interorDesignContactUsTitle'>Contact Us</p>
                <p className='interorDesignContactUsDescription'>
                  The night is dark and full of terrors. What is dead may never
                  die. And now his watch is ended. All men must die.
                </p>
              </div>
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
          <Portfolio portfolio_main={home.home.portfolio_main} />
          <Footer slider={true} />
        </>
      )}
    </motion.div>
  );
};

export default InteriorDesign;
