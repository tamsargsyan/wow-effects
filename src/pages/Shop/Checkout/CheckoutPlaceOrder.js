import CheckoutLayout from "./CheckoutLayout";
import "./style.css";
import Button from "../../../components/Button/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactSchema } from "../../../utils/validationSchema";
import Checkbox from "../../../components/Checkbox/Checkbox";

const CheckoutPlaceOrder = () => {
  return (
    <CheckoutLayout>
      <div className='checkoutPlaceOrderContainer container'>
        <div className='checkoutPlaceOrderFormsContainer'>
          <div className='checkoutPlaceOrderPerosnalInfoFormContainer'>
            <Formik
              initialValues={{
                first_name: "",
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
                <Form className='checkoutPlaceOrderForm1'>
                  <p className='checkoutPlaceOrderTitle'>
                    Personal information
                  </p>
                  <div className='checkoutPlaceOrderFormGroupContainer'>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>First Name *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your first name'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>First Name *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your first name'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                  </div>
                  <div className='checkoutPlaceOrderFormGroupContainer'>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Email Address *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your email address'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Phone Number *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your phone number'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                  </div>
                  <div className='checkoutPlaceOrderFormGroup checkoutPlaceOrderFormGroupMessage'>
                    <label htmlFor='first_name'>Message</label>
                    <div className='checkoutPlaceOrderFormGroupInput'>
                      <Field
                        type='text'
                        name='first_name'
                        placeholder='Enter your message'
                      />
                    </div>
                    <ErrorMessage
                      name='first_name'
                      component='p'
                      className='authError'
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className='checkoutPlaceOrderShippingAddressFormContainer'>
            <Formik
              initialValues={{
                first_name: "",
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
                <Form className='checkoutPlaceOrderForm2'>
                  <p className='checkoutPlaceOrderTitle'>Shipping Address</p>
                  <div className='checkoutPlaceOrderFormGroupContainer'>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Country/Region *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your first name'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Region / district *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your first name'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                  </div>
                  <div className='checkoutPlaceOrderFormGroupContainer'>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Locality *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your email address'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                    <div className='checkoutPlaceOrderFormGroup'>
                      <label htmlFor='first_name'>Address *</label>
                      <div className='checkoutPlaceOrderFormGroupInput'>
                        <Field
                          type='text'
                          name='first_name'
                          placeholder='Enter your phone number'
                        />
                      </div>
                      <ErrorMessage
                        name='first_name'
                        component='p'
                        className='authError'
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className='orderSummaryContainer'>
          <div className='orderSummaryTitleContainer'>
            <p className='orderSummaryTitle'>Order Summary</p>
          </div>
          <div className='orderSubtotalContainer'>
            <div className='subtotal'>
              <p className='subtotalTitle'>Subtotal</p>
              <p className='subtotalDescription'>$560</p>
            </div>
            <div className='subtotal'>
              <p className='subtotalTitle'>Delivery</p>
              <p className='subtotalDescription'>$10</p>
            </div>
          </div>
          <div className='orderSummaryLine'></div>
          <div className='totalContainer'>
            <p className='subtotalTitle'>Total</p>
            <p className='subtotalDescription'>$560</p>
          </div>
          <div className='orderSummaryLine'></div>
          <Checkbox text='I have read and accept the terms and conditions of the site *' />
          <Button
            text='Checkout'
            // icon={PLUS}
            // alt='Plus'
            link={true}
            to='/checkout/place-order'
            className='checkoutContinueBtn'
            style={{
              background: "var(--main-color-pink)",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
              border: "none",
              color: "var(--secondary-color-white)",
              fontFamily: "Poppins-600",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
          />
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutPlaceOrder;
