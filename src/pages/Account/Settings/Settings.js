import AccountLayout from "../AccountLayout";
import PERSON from "../../../assets/person-images/1.jpg";
import "./style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { accountManagementSchema } from "../../../utils/validationSchema";
import Button from "../../../components/Button/Button";

const Settings = () => {
  return (
    <AccountLayout>
      <div className='accountSettingsContainer'>
        <div className='accountPageTitleContainer'>
          <p className='accountPageTitle'>Personal info</p>
        </div>
        <div className='accountManagement'>
          <div className='accountManagementAvatar'>
            <div className='accountManagementAvatarImg'>
              <img src={PERSON} alt='Avatar' />
            </div>
            <div className='accountAvatarUploadBtn'>
              <input type='file' id='upload' hidden />
              <label htmlFor='upload'>Upload image</label>
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
                        Name <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='name'
                          placeholder='Enter your name'
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
                        Surname <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='last_name'
                          placeholder='Enter your surname'
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
                        Email <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='email'
                          placeholder='Enter your email'
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
                        Phone Number <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='phone'
                          placeholder='Enter your phone number'
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
                      Password Information
                    </p>
                    <div className='accountMangementFormGroup'>
                      <label htmlFor='current_password'>
                        Current password <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='current_password'
                          placeholder='Enter your phone number'
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
                        New password <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='new_password'
                          placeholder='Enter your phone number'
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
                        Conform password <span>*</span>
                      </label>
                      <div className='accountMangementFormGroupInput'>
                        <Field
                          type='text'
                          name='password_confirmation'
                          placeholder='Enter your phone number'
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
                    text='Save Changes'
                    className='accountMangementSaveBtn'
                    style={{
                      background: "var(--main-color-pink)",
                      color: "var(--secondary-color-white)",
                      border: "none",
                      fontFamily: "Poppins-600",
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
