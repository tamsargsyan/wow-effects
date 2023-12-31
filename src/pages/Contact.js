import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactLayout from "../components/ContactLayout/ContactLayout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ValidationSchema from "../utils/ValidationSchema";
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
import { fetchContacts } from "../redux/actions/contactsActions";
import Spinner from "../components/Spinner/Spinner";
import Locations from "../components/Locations/Locations";
import { removeHtmlTags } from "../Helpers/removeHtmlTags";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchContacts());
  }, [dispatch]);

  const locations = useSelector(state => state.locations);
  const contacts = useSelector(state => state.contacts);
  const lang = Cookies.get("i18next") || "en";

  const { contactSchema } = ValidationSchema();

  if (
    locations.loading &&
    locations.locations === null &&
    contacts.loading &&
    contacts.contacts === null
  )
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
      {locations.locations?.locations && contacts.contacts && (
        <>
          <ContactLayout
            pageTitle={contacts.contacts.contacts_main[`heading_${lang}`]}
            pageDescription={removeHtmlTags(
              contacts.contacts.contacts_main[`description_${lang}`]
            )}
            detailsChildren={
              <>
                {/* {contactDetails.map(detail => (
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
                ))} */}
                <div className='contactDetail'>
                  <div className='contactDetailIcon'>
                    <Img src={LOCATION} alt='Locations' />
                  </div>
                  <div className='contactDetailInfo'>
                    <p className='contactDetailInfoTitle'>{t("address")}</p>
                    <p className='contactDetailInfoDescription'>
                      {contacts.contacts.contacts_main[`address_${lang}`]}
                    </p>
                  </div>
                </div>
                <div className='contactDetail'>
                  <div className='contactDetailIcon'>
                    <Img src={EMAIL} alt='Email' />
                  </div>
                  <div className='contactDetailInfo'>
                    <p className='contactDetailInfoTitle'>{t("email")}</p>
                    <p className='contactDetailInfoDescription'>
                      {contacts.contacts.contacts_main.email}
                    </p>
                  </div>
                </div>
                <div className='contactDetail'>
                  <div className='contactDetailIcon'>
                    <Img src={TELEPHONE} alt='Telephone' />
                  </div>
                  <div className='contactDetailInfo'>
                    <p className='contactDetailInfoTitle'>
                      {t("phone_number")}
                    </p>
                    <p className='contactDetailInfoDescription'>
                      {contacts.contacts.contacts_main.phone}
                    </p>
                  </div>
                </div>
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
                    <label htmlFor='full_name'>{t("full_name")}</label>
                    <div className='contactFormGroupInput'>
                      <Field
                        type='text'
                        name='full_name'
                        placeholder={t("placeholder.enter_your_full_name")}
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
                      <label htmlFor='email'>{t("email_address")}</label>
                      <div className='contactFormGroupInput'>
                        <Field
                          type='email'
                          name='email'
                          placeholder={t(
                            "placeholder.enter_your_email_address"
                          )}
                        />
                      </div>
                      <ErrorMessage
                        name='email'
                        component='p'
                        className='authError'
                      />
                    </div>
                    <div className='contactFormGroup'>
                      <label htmlFor='phone'>{t("phone_number")}</label>
                      <div className='contactFormGroupInput'>
                        <Field
                          type='text'
                          name='phone'
                          placeholder={t("placeholder.enter_your_phone_number")}
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
                    <label htmlFor='message'>{t("message")}</label>
                    <div className='contactFormGroupInput'>
                      <Field
                        type='text'
                        name='message'
                        placeholder={t("placeholder.enter_your_your_message")}
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
                    text={t("send-message")}
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
