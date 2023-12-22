import AccountLayout from "../AccountLayout";
import PERSON from "../../../assets/person-images/1.jpg";
import "./style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ValidationSchema from "../../../utils/ValidationSchema";
import Button from "../../../components/Button/Button";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  const { accountManagementSchema } = ValidationSchema();

  return (
    <AccountLayout>
      <div className='accountSettingsContainer'>
        <div className='accountPageTitleContainer'>
          <p className='accountPageTitle'>{t("personal_info")}</p>
        </div>
        <div className='accountManagement'>
          <div className='accountManagementAvatar'>
            <div className='accountManagementAvatarImg'>
              <img src={PERSON} alt='Avatar' />
            </div>
            <div className='accountAvatarUploadBtn'>
              <input type='file' id='upload' hidden />
              <label htmlFor='upload'>{t("upload_image")}</label>
            </div>
          </div>
          <div className='accountManagementForm'>
            <Formik
              initialValues={{
                name: "",
                last_name: "",
                email: "",
                phone: "",
                current_password: "",
                new_password: "",
                password_confirmation: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
              }}
              validationSchema={accountManagementSchema}>
              {() => (
                <Form id='accountManagementForm'>
                  <div className='accountManagementPersonalData'>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='name'>
                        {t("name")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='name'
                          placeholder={t("placeholder.enter_your_name")}
                        />
                      </div>
                      <ErrorMessage
                        name='name'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='last_name'>
                        {t("surname")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='last_name'
                          placeholder={t("placeholder.enter_your_surname")}
                        />
                      </div>
                      <ErrorMessage
                        name='last_name'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='email'>
                        {t("email")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='email'
                          placeholder={t("placeholder.enter_your_email")}
                        />
                      </div>
                      <ErrorMessage
                        name='email'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='phone'>
                        {t("phone_number")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='phone'
                          placeholder={t("placeholder.enter_your_phone_number")}
                        />
                      </div>
                      <ErrorMessage
                        name='phone'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                  </div>
                  <div className='accountManagementDivider'></div>
                  <div className='passwordModification'>
                    <p className='passwordModificationTitle'>
                      {t("password_information")}
                    </p>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='current_password'>
                        {t("current_password")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='current_password'
                          placeholder={t(
                            "placeholder.enter_your_current_password"
                          )}
                        />
                      </div>
                      <ErrorMessage
                        name='current_password'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='new_password'>
                        {t("new_password")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='new_password'
                          placeholder={t("placeholder.enter_your_new_password")}
                        />
                      </div>
                      <ErrorMessage
                        name='new_password'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='password_confirmation'>
                        {t("password_confirmation")} <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='password_confirmation'
                          placeholder={t("placeholder.enter_your_new_password")}
                        />
                      </div>
                      <ErrorMessage
                        name='password_confirmation'
                        component='p'
                        className='accountMangementError'
                      />
                    </div>
                  </div>
                  <Button
                    text={t("save_changes")}
                    className='accountMangementSaveBtn'
                    style={{
                      background: "var(--main-color-pink)",
                      color: "var(--secondary-color-white)",
                      border: "none",
                      fontFamily: "Poppins-600, sans-serif",
                      fontWeight: "600",
                    }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Settings;
