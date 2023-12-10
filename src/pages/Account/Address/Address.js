import Button from "../../../components/Button/Button";
import AccountLayout from "../AccountLayout";
import PLUS from "../../../assets/icons/plus-bg-white.svg";
import LOCATION from "../../../assets/icons/location-gray.svg";
import PEN from "../../../assets/icons/pen-gray.svg";
import DELETE from "../../../assets/icons/delete-gray.svg";
import "./style.css";
import Modal from "../../../components/Modal/Modal";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { newAddressSchema } from "../../../utils/validationSchema";
import Checkbox from "../../../components/Checkbox/Checkbox";

const Address = () => {
  const addresses = [
    {
      id: 1,
      title: "<p>House <span>( Primary )</span></p>",
      default: true,
      address: "Yerevan, Name Street 12/1",
    },
    {
      id: 2,
      title: "<p>Office</p>",
      default: false,
      address: "Yerevan, Name Street 12/1",
    },
  ];

  const [addNewAddress, setAddNewAddress] = useState(false);

  return (
    <AccountLayout>
      <div className='addressContainer'>
        <div className='accountPageTitleContainer'>
          <p className='accountPageTitle'>Addresses</p>
          <p className='accountPageDescription'>
            All your shipping addresses are stored here.
          </p>
        </div>
        <div className='addressSegment'>
          <Button
            text='Add new address'
            icon={PLUS}
            alt='Plus'
            className='addNewAddressBtn'
            style={{
              background: "var(--main-color-pink)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
              border: "none",
              color: "var(--secondary-color-white)",
            }}
            onClick={() => setAddNewAddress(true)}
          />
          <div className='adressesWrapper'>
            {addresses.map((address, i) => (
              <div className='addressWrapper' key={i}>
                <div className='addressLabel'>
                  <label htmlFor='html'>
                    <input
                      type='radio'
                      id='html'
                      name='fav_language'
                      value='HTML'
                    />
                    <div>
                      <div
                        className='addressTitle'
                        dangerouslySetInnerHTML={{
                          __html: address.title,
                        }}
                      />
                      <p className='address'>
                        <img src={LOCATION} alt='Location' />
                        {address.address}
                      </p>
                    </div>
                  </label>
                </div>
                <div className='addressActionPanel'>
                  <button className='addressEditBtn'>
                    <img src={PEN} alt='Pen' />
                  </button>
                  <button className='addressDeleteBtn'>
                    <img src={DELETE} alt='Delete' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title='Add new address'
        open={addNewAddress}
        onClose={() => setAddNewAddress(false)}>
        <Formik
          initialValues={{
            country: "",
            city: "",
            address: "",
            zip_code: "",
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
          validationSchema={newAddressSchema}>
          {() => (
            <Form id='newAddressForm'>
              <div className='newAddresFormGroup'>
                <label htmlFor='country'>
                  Country <span>*</span>
                </label>
                <div className='newAddresFormGroupInput'>
                  <Field
                    type='text'
                    name='country'
                    placeholder='Enter your password'
                  />
                </div>
                <ErrorMessage
                  name='country'
                  component='p'
                  className='newAddressError'
                />
              </div>
              <div className='newAddresFormGroup'>
                <label htmlFor='city'>
                  City <span>*</span>
                </label>
                <div className='newAddresFormGroupInput'>
                  <Field
                    type='text'
                    name='city'
                    placeholder='Enter your password'
                  />
                </div>
                <ErrorMessage
                  name='city'
                  component='p'
                  className='newAddressError'
                />
              </div>
              <div className='newAddresFormGroup'>
                <label htmlFor='address'>
                  Address <span>*</span>
                </label>
                <div className='newAddresFormGroupInput'>
                  <Field
                    type='text'
                    name='address'
                    placeholder='Enter your password'
                  />
                </div>
                <ErrorMessage
                  name='address'
                  component='p'
                  className='newAddressError'
                />
              </div>
              <div className='newAddresFormGroup'>
                <label htmlFor='zip_code'>
                  Zip Code <span>*</span>
                </label>
                <div className='newAddresFormGroupInput'>
                  <Field
                    type='text'
                    name='zip_code'
                    placeholder='Enter your password'
                  />
                </div>
                <ErrorMessage
                  name='zip_code'
                  component='p'
                  className='newAddressError'
                />
              </div>
              <Checkbox text='Make the address default' />
              <Button
                text='Add Address'
                className='addAddressBtn'
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
      </Modal>
    </AccountLayout>
  );
};

export default Address;
